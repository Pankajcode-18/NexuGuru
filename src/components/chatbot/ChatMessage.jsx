/* ChatMessage.jsx – renders a single chat bubble */
import { navigate } from '../../lib/router.jsx';

const fmtTime = (d) =>
  d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

/* Render **bold** markdown */
function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i}>{p.slice(2, -2)}</strong>
          : p.split('\n').map((line, j, arr) => (
              <span key={`${i}-${j}`}>
                {line}
                {j < arr.length - 1 && <br />}
              </span>
            ))
      )}
    </>
  );
}

export default function ChatMessage({ msg }) {
  const isBot = msg.role === 'bot';
  const isTyping = msg.typing;

  return (
    <div className={`chat-msg ${isBot ? 'chat-msg--bot' : 'chat-msg--user'}`}>
      {isBot && (
        <div className="chat-msg__avatar" aria-hidden="true">
          <span>N</span>
        </div>
      )}

      <div className="chat-msg__body">
        {/* Bubble */}
        <div className="chat-msg__bubble">
          {isTyping ? (
            <div className="chat-typing" aria-label="Bot is typing">
              <span /><span /><span />
            </div>
          ) : (
            <>
              <p className="chat-msg__text">
                <RichText text={msg.text} />
              </p>

              {/* File chip */}
              {msg.file && (
                <div className="chat-file-chip">
                  📎 <span>{msg.file}</span>
                </div>
              )}

              {/* CTA link button */}
              {msg.link && (
                <button
                  className="chat-msg__cta"
                  onClick={() => navigate(msg.link.to)}
                  aria-label={`Navigate to ${msg.link.label}`}
                >
                  {msg.link.label} →
                </button>
              )}
            </>
          )}
        </div>

        {/* Timestamp */}
        {!isTyping && (
          <time className="chat-msg__time" dateTime={msg.ts?.toISOString()}>
            {fmtTime(msg.ts || new Date())}
          </time>
        )}
      </div>
    </div>
  );
}
