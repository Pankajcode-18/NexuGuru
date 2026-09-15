/* ChatWidget.jsx – Nexu Guru floating chatbot launcher + window */
import { useEffect, useRef, useState, useCallback } from 'react';
import ChatMessage from './ChatMessage.jsx';
import QuickReplies from './QuickReplies.jsx';
import ChatInput from './ChatInput.jsx';
import {
  getBotReply,
  WELCOME_MSG,
  QUICK_CHIPS,
  CHIP_MAP,
} from './botReplies.js';

/* ── Persistent storage key ── */
const STORE_KEY = 'nexu_chat_history';

const loadHistory = () => {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed.map((m) => ({ ...m, ts: new Date(m.ts) }));
  } catch {
    return null;
  }
};

const saveHistory = (msgs) => {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(msgs));
  } catch {/* quota */ }
};

/* ── ID generator ── */
let _id = 0;
const uid = () => `msg-${++_id}`;

/* ── Initial messages ── */
const buildWelcome = () => [
  { id: uid(), role: 'bot', text: WELCOME_MSG, ts: new Date(), chips: true },
];

export default function ChatWidget() {
  /* open / close state */
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);

  /* messages */
  const [msgs, setMsgs] = useState(() => loadHistory() || buildWelcome());
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(false);

  /* tooltip */
  const [tooltip, setTooltip] = useState(false);

  /* 3-dot menu */
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  /* refs */
  const bottomRef = useRef();
  const inputFocusRef = useRef();
  const menuRef = useRef();

  /* persist history */
  useEffect(() => saveHistory(msgs), [msgs]);

  /* tooltip after 8 s */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setTooltip(true);
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  /* auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, isTyping]);

  /* focus input when opened */
  useEffect(() => {
    if (open && !minimised) {
      setTimeout(() => inputFocusRef.current?.focus(), 120);
    }
  }, [open, minimised]);

  /* Escape closes chat */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* close menu on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e) => {
      if (!menuRef.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [menuOpen]);

  /* ── helpers ── */
  const addMsg = (msg) =>
    setMsgs((prev) => [...prev, { id: uid(), ts: new Date(), ...msg }]);

  const sendBotReply = useCallback((rule) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMsg({ role: 'bot', ...rule });
      if (!open) setUnread(true);
    }, 900 + Math.random() * 400);
  }, [open]);

  /* ── user sends a message ── */
  const handleSend = (text) => {
    addMsg({ role: 'user', text });
    const rule = getBotReply(text);
    sendBotReply(rule);
  };

  /* ── quick chip ── */
  const handleChip = (chip) => {
    const text = CHIP_MAP[chip] || chip;
    addMsg({ role: 'user', text: chip });
    const rule = getBotReply(text);
    sendBotReply(rule);
  };

  /* ── file attach ── */
  const handleFile = (name) => {
    addMsg({ role: 'user', text: `Sent a file`, file: name });
    sendBotReply({
      text: "Thanks! Our team will review this shortly. 📋",
      chips: false,
    });
  };

  /* ── open/close ── */
  const toggleOpen = () => {
    setTooltip(false);
    setOpen((o) => !o);
    setMinimised(false);
    setUnread(false);
  };

  /* ── clear chat ── */
  const clearChat = () => {
    const fresh = buildWelcome();
    setMsgs(fresh);
    saveHistory(fresh);
    setConfirmClear(false);
    setMenuOpen(false);
  };

  /* ── date separator ── */
  const renderDate = () => (
    <div className="chat-date-sep" aria-label="Today">Today</div>
  );

  return (
    <>
      {/* ── CHAT WINDOW ── */}
      {open && !minimised && (
        <div
          className="chat-window"
          role="dialog"
          aria-modal="true"
          aria-label="Nexu Guru Assistant chat"
        >
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header__avatar" aria-hidden="true">
              <span>N</span>
              <span className="chat-header__online" />
            </div>
            <div className="chat-header__info">
              <strong>Nexu Guru Assistant</strong>
              <small>Usually replies instantly</small>
            </div>

            <div className="chat-header__actions">
              {/* 3-dot menu */}
              <div className="chat-menu-wrap" ref={menuRef}>
                <button
                  className="chat-hdr-btn"
                  aria-label="More options"
                  onClick={() => setMenuOpen((m) => !m)}
                >
                  ⋮
                </button>
                {menuOpen && (
                  <div className="chat-menu">
                    {confirmClear ? (
                      <>
                        <p className="chat-menu__confirm">Clear all messages?</p>
                        <div className="chat-menu__row">
                          <button onClick={clearChat} className="chat-menu__yes">Yes, clear</button>
                          <button onClick={() => setConfirmClear(false)} className="chat-menu__no">Cancel</button>
                        </div>
                      </>
                    ) : (
                      <button onClick={() => setConfirmClear(true)}>
                        🗑️ Clear chat
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Minimise */}
              <button
                className="chat-hdr-btn"
                aria-label="Minimise chat"
                onClick={() => setMinimised(true)}
              >
                −
              </button>

              {/* Close */}
              <button
                className="chat-hdr-btn"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Message area */}
          <div
            className="chat-body"
            aria-live="polite"
            aria-atomic="false"
            aria-label="Chat messages"
          >
            {renderDate()}

            {msgs.map((m) => (
              <div key={m.id}>
                <ChatMessage msg={m} />
                {m.chips && (
                  <QuickReplies chips={QUICK_CHIPS} onSelect={handleChip} />
                )}
              </div>
            ))}

            {isTyping && (
              <ChatMessage msg={{ role: 'bot', typing: true, ts: new Date() }} />
            )}

            <div ref={bottomRef} aria-hidden="true" />
          </div>

          {/* Input */}
          <ChatInput
            ref={inputFocusRef}
            onSend={handleSend}
            onFile={handleFile}
            disabled={isTyping}
          />
        </div>
      )}

      {/* ── MINIMISED BAR ── */}
      {open && minimised && (
        <div className="chat-mini" onClick={() => setMinimised(false)} role="button" tabIndex={0} aria-label="Expand chat">
          <div className="chat-mini__avatar">N</div>
          <span>Nexu Guru Assistant</span>
          <span className="chat-mini__dot" />
          <button className="chat-mini__close" aria-label="Close" onClick={(e) => { e.stopPropagation(); setOpen(false); }}>✕</button>
        </div>
      )}

      {/* ── TOOLTIP ── */}
      {tooltip && !open && (
        <div
          className="chat-tooltip"
          role="status"
          onClick={() => setTooltip(false)}
        >
          Need help? Ask me anything! 💬
          <button className="chat-tooltip__close" aria-label="Dismiss tooltip" onClick={(e) => { e.stopPropagation(); setTooltip(false); }}>×</button>
        </div>
      )}

      {/* ── LAUNCHER BUTTON ── */}
      <button
        className={`chat-launcher ${open ? 'chat-launcher--open' : ''}`}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={toggleOpen}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" opacity=".15" />
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}

        {/* Unread dot */}
        {unread && !open && (
          <span className="chat-launcher__unread" aria-label="Unread message" />
        )}
      </button>
    </>
  );
}
