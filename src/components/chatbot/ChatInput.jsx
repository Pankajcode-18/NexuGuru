/* ChatInput.jsx – textarea + attach + send */
import { forwardRef, useRef, useState } from 'react';

const ChatInput = forwardRef(function ChatInput({ onSend, onFile, disabled }, fwdRef) {
  const [text, setText] = useState('');
  const fileRef = useRef();
  const textRef = useRef();

  const send = () => {
    const t = text.trim();
    if (!t || disabled) return;
    onSend(t);
    setText('');
    textRef.current?.focus();
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFile(file.name);
      e.target.value = '';
    }
  };

  /* Auto-resize textarea up to ~3 rows */
  const onInput = (e) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 84) + 'px';
    setText(el.value);
  };

  return (
    <div className="chat-input-bar">
      {/* Attach */}
      <button
        type="button"
        className="chat-input-icon"
        aria-label="Attach a file"
        onClick={() => fileRef.current?.click()}
      >
        📎
        <input
          ref={fileRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFile}
          aria-hidden="true"
          tabIndex={-1}
        />
      </button>

      {/* Textarea */}
      <textarea
        ref={(el) => {
          textRef.current = el;
          if (typeof fwdRef === 'function') fwdRef(el);
          else if (fwdRef) fwdRef.current = el;
        }}
        className="chat-input-text"
        placeholder="Type your message…"
        value={text}
        rows={1}
        onInput={onInput}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKey}
        aria-label="Message input"
        aria-multiline="true"
        disabled={disabled}
      />

      {/* Send */}
      <button
        type="button"
        className={`chat-input-send ${!text.trim() || disabled ? 'disabled' : ''}`}
        aria-label="Send message"
        onClick={send}
        disabled={!text.trim() || disabled}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
});

export default ChatInput;
