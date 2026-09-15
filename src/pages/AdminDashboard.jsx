import { useState } from 'react';
import logoImg from '../assets/logo1.png';
import '../styles/admin.css';
import {
  adminStats, students, teachers, classes, subjects, chapters,
  videos, notes, stickyNotes, mcqSets, importantQuestions, pastPapers,
  packages, coupons, payments, blogs, reviews, reportedIssues,
  recentActivity, revenueData, revenueMonths, siteSettings, homepageContent,
} from '../data/adminMock.js';

/* ── helpers ── */
const Badge = ({ status }) => {
  const map = {
    Active: 'green', Published: 'green', Paid: 'green', Approved: 'green',
    Resolved: 'green', Ended: 'gray',
    Inactive: 'gray', Draft: 'gray', Expired: 'gray', Free: 'gray',
    Pending: 'orange', Scheduled: 'orange', 'In Progress': 'orange',
    Suspended: 'red', Failed: 'red', Open: 'red', Critical: 'red',
    High: 'orange', Medium: 'blue', Low: 'gray',
  };
  return <span className={`adm-badge ${map[status] || 'gray'}`}>{status}</span>;
};

const Avatar = ({ name, color = 'purple', size }) => (
  <div className={`adm-avatar ${color}`} style={size ? { width: size, height: size } : {}}>
    {(name || '?')[0].toUpperCase()}
  </div>
);

const ModalShell = ({ title, onClose, children, size = '' }) => (
  <div className="adm-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
    <div className={`adm-modal ${size}`}>
      <div className="adm-modal-header">
        <div className="adm-modal-title">{title}</div>
        <button className="adm-modal-close" onClick={onClose}>✕</button>
      </div>
      {children}
    </div>
  </div>
);

/* ── SIDEBAR NAV CONFIG ── */
const ADMIN_NAV = [
  {
    section: 'Overview',
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: '📊' },
      { key: 'analytics', label: 'Analytics', icon: '📈' },
    ],
  },
  {
    section: 'Content',
    items: [
      { key: 'classes', label: 'Classes', icon: '🏫' },
      { key: 'subjects', label: 'Subjects', icon: '📚' },
      { key: 'chapters', label: 'Chapters', icon: '📖' },
      { key: 'notes', label: 'Notes', icon: '📄' },
      { key: 'videos', label: 'Videos', icon: '🎥' },
      { key: 'sticky-notes', label: 'Sticky Notes', icon: '🗒️' },
      { key: 'mcq', label: 'Live MCQ', icon: '❓' },
      { key: 'important-questions', label: 'Important Questions', icon: '⭐' },
      { key: 'past-papers', label: 'Past Papers', icon: '🗂️' },
    ],
  },
  {
    section: 'People',
    items: [
      { key: 'students', label: 'Students', icon: '🎓', badge: '12.8k' },
      { key: 'teachers', label: 'Teachers', icon: '👨‍🏫' },
    ],
  },
  {
    section: 'Commerce',
    items: [
      { key: 'packages', label: 'Packages', icon: '📦' },
      { key: 'payments', label: 'Payments', icon: '💳' },
      { key: 'coupons', label: 'Coupons', icon: '🏷️' },
    ],
  },
  {
    section: 'Engagement',
    items: [
      { key: 'blogs', label: 'Blogs', icon: '✍️' },
      { key: 'reviews', label: 'Reviews', icon: '⭐', badge: '3' },
      { key: 'issues', label: 'Reported Issues', icon: '🚨', badge: '2' },
    ],
  },
  {
    section: 'Settings',
    items: [
      { key: 'homepage', label: 'Homepage Content', icon: '🏠' },
      { key: 'settings', label: 'Site Settings', icon: '⚙️' },
    ],
  },
];

const TEACHER_NAV = [
  {
    section: 'My Dashboard',
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    ],
  },
  {
    section: 'My Content',
    items: [
      { key: 'videos', label: 'My Videos', icon: '🎥' },
      { key: 'notes', label: 'My Notes', icon: '📄' },
      { key: 'sticky-notes', label: 'Sticky Notes', icon: '🗒️' },
      { key: 'mcq', label: 'Live MCQ', icon: '❓' },
      { key: 'important-questions', label: 'Important Questions', icon: '⭐' },
    ],
  },
  {
    section: 'My Students',
    items: [
      { key: 'students', label: 'Students', icon: '🎓' },
    ],
  },
];

/* ================================================================
   MODULE SCREENS
   ================================================================ */

/* ── DASHBOARD (Overview) ── */
function DashboardScreen() {
  const maxRev = Math.max(...revenueData);
  return (
    <div>
      <div className="adm-page-header">
        <div>
          <div className="adm-page-title">Good morning, Admin 👋</div>
          <div className="adm-page-subtitle">Here's what's happening today on Nexu Guru</div>
        </div>
        <div className="adm-page-header-actions">
          <button className="adm-btn adm-btn-outline adm-btn-sm">📤 Export</button>
          <button className="adm-btn adm-btn-primary adm-btn-sm">+ Quick Add</button>
        </div>
      </div>

      {/* Stats */}
      <div className="adm-stats-grid">
        {adminStats.map(s => (
          <div key={s.id} className={`adm-stat-card ${s.color}`}>
            <div className="adm-stat-icon">{s.icon}</div>
            <div className="adm-stat-value">{s.value}</div>
            <div className="adm-stat-label">{s.label}</div>
            <div className={`adm-stat-delta ${s.up ? 'up' : 'down'}`}>
              {s.up ? '↑' : '↓'} {s.delta} <span style={{ fontWeight: 400, color: 'var(--muted)' }}>vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts + Activity */}
      <div className="adm-grid-6040">
        <div className="adm-card">
          <div className="adm-card-header">
            <div>
              <div className="adm-card-title">Revenue Overview</div>
              <div className="adm-card-subtitle">Monthly revenue (PKR) – last 12 months</div>
            </div>
            <div className="adm-card-actions">
              <button className="adm-btn adm-btn-ghost adm-btn-sm">Monthly</button>
            </div>
          </div>
          <div className="adm-card-body">
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--ink)', marginBottom: 4 }}>₨2,41,280</div>
            <div style={{ fontSize: 12, color: 'var(--green)', marginBottom: 20 }}>↑ +12.4% from last month</div>
            <div className="adm-chart-area">
              {revenueData.map((v, i) => (
                <div key={i} className="adm-chart-bar" style={{ height: `${(v / maxRev) * 100}%` }} title={`${revenueMonths[i]}: ₨${v * 2412}`} />
              ))}
            </div>
            <div className="adm-chart-months" style={{ marginTop: 8 }}>
              {revenueMonths.map(m => <div key={m} className="adm-chart-month">{m}</div>)}
            </div>
          </div>
        </div>

        <div className="adm-card">
          <div className="adm-card-header">
            <div className="adm-card-title">Recent Activity</div>
          </div>
          <div className="adm-card-body" style={{ padding: '0 22px' }}>
            <div className="adm-activity-list">
              {recentActivity.map(a => (
                <div key={a.id} className="adm-activity-item">
                  <div className={`adm-activity-dot ${a.dot}`} />
                  <div className="adm-activity-text">{a.text}</div>
                  <div className="adm-activity-time">{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tables */}
      <div className="adm-grid-2">
        <div className="adm-card">
          <div className="adm-card-header">
            <div className="adm-card-title">Recent Students</div>
            <button className="adm-btn adm-btn-ghost adm-btn-sm">View All</button>
          </div>
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead><tr><th>Student</th><th>Class</th><th>Status</th></tr></thead>
              <tbody>
                {students.slice(0, 5).map(s => (
                  <tr key={s.id}>
                    <td><div className="adm-user-cell"><Avatar name={s.name} color={s.color} /><div><div className="adm-avatar-name">{s.name}</div><div className="adm-avatar-sub">{s.email}</div></div></div></td>
                    <td>{s.class}</td>
                    <td><Badge status={s.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="adm-card">
          <div className="adm-card-header">
            <div className="adm-card-title">Reported Issues</div>
            <button className="adm-btn adm-btn-ghost adm-btn-sm">View All</button>
          </div>
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead><tr><th>Issue</th><th>Priority</th><th>Status</th></tr></thead>
              <tbody>
                {reportedIssues.map(r => (
                  <tr key={r.id}>
                    <td><div style={{ fontWeight: 600 }}>{r.type}</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>{r.student}</div></td>
                    <td><Badge status={r.priority} /></td>
                    <td><Badge status={r.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── STUDENTS ── */
function StudentsScreen() {
  const [search, setSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const filtered = students.filter(s =>
    (filter === 'All' || s.status === filter) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="adm-page-header">
        <div>
          <div className="adm-page-title">Students</div>
          <div className="adm-page-subtitle">{students.length} total students enrolled</div>
        </div>
        <div className="adm-page-header-actions">
          <button className="adm-btn adm-btn-outline adm-btn-sm">📤 Export CSV</button>
          <button className="adm-btn adm-btn-primary adm-btn-sm" onClick={() => setAddOpen(true)}>+ Add Student</button>
        </div>
      </div>

      <div className="adm-htabs" style={{ marginBottom: 20 }}>
        {['All', 'Active', 'Inactive', 'Suspended'].map(f => (
          <button key={f} className={`adm-htab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      <div className="adm-filter-bar">
        <div className="adm-search-input">
          <span style={{ color: 'var(--faint)' }}>🔍</span>
          <input placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select className="adm-filter-select"><option>All Classes</option>{classes.map(c => <option key={c.id}>{c.name}</option>)}</select>
        <select className="adm-filter-select"><option>All Packages</option></select>
      </div>

      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Student</th><th>Class</th><th>Package</th><th>Joined</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td><div className="adm-user-cell"><Avatar name={s.name} color={s.color} /><div><div className="adm-avatar-name">{s.name}</div><div className="adm-avatar-sub">{s.email}</div></div></div></td>
                  <td>{s.class}</td>
                  <td><span className="adm-badge purple">{s.pkg}</span></td>
                  <td style={{ color: 'var(--muted)', fontSize: 13 }}>{s.joined}</td>
                  <td><Badge status={s.status} /></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button>
                      <button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {addOpen && (
        <ModalShell title="Add New Student" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Full Name</label><input className="adm-input" placeholder="Enter full name" /></div>
              <div className="adm-form-group"><label className="adm-label required">Email</label><input className="adm-input" type="email" placeholder="email@example.com" /></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Phone</label><input className="adm-input" placeholder="+92 300 0000000" /></div>
              <div className="adm-form-group"><label className="adm-label required">Class</label><select className="adm-select"><option>Select class</option>{classes.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Package</label><select className="adm-select"><option>Select package</option>{packages.map(p => <option key={p.id}>{p.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Password</label><input className="adm-input" type="password" placeholder="Set password" /></div>
              <div className="adm-form-group"><label className="adm-label">Status</label><select className="adm-select"><option>Active</option><option>Inactive</option></select></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Student</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── TEACHERS ── */
function TeachersScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div>
          <div className="adm-page-title">Teachers</div>
          <div className="adm-page-subtitle">{teachers.length} teachers registered</div>
        </div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Teacher</button>
      </div>

      <div className="adm-grid-2" style={{ marginBottom: 0 }}>
        {teachers.map(t => (
          <div key={t.id} className="adm-card" style={{ marginBottom: 20 }}>
            <div className="adm-card-body">
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Avatar name={t.name} color={t.color} size="52px" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{t.name}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 8 }}>{t.subject} · {t.classes.join(', ')}</div>
                  <Badge status={t.status} />
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button>
                  <button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 20, marginTop: 18, paddingTop: 14, borderTop: '1px solid #f0eef8' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--ink)' }}>{t.videos}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>Videos</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--ink)' }}>{t.students.toLocaleString()}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>Students</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, alignItems: 'center' }}>
                  <button className="adm-btn adm-btn-outline adm-btn-sm">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {addOpen && (
        <ModalShell title="Add New Teacher" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Full Name</label><input className="adm-input" placeholder="Teacher's name" /></div>
              <div className="adm-form-group"><label className="adm-label required">Email</label><input className="adm-input" type="email" placeholder="teacher@nexuguru.com" /></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Subject</label><select className="adm-select"><option>Select subject</option></select></div>
              <div className="adm-form-group"><label className="adm-label">Phone</label><input className="adm-input" placeholder="+92 300 0000000" /></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Bio</label><textarea className="adm-textarea" placeholder="Short teacher bio..." /></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Profile Photo</label><div className="adm-upload-zone"><div className="adm-upload-icon">📸</div><div className="adm-upload-text">Drag & drop or <strong>Browse files</strong></div></div></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Teacher</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── CLASSES ── */
function ClassesScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Classes</div><div className="adm-page-subtitle">Manage all class tiers</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Class</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Class Name</th><th>Board</th><th>Subjects</th><th>Students</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {classes.map(c => (
                <tr key={c.id}>
                  <td style={{ fontWeight: 600 }}>{c.name}</td>
                  <td>{c.board}</td>
                  <td><span className="adm-badge blue">{c.subjects} Subjects</span></td>
                  <td>{c.students.toLocaleString()}</td>
                  <td><Badge status={c.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Add New Class" onClose={() => setAddOpen(false)} size="sm">
          <div className="adm-modal-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Class Name</label><input className="adm-input" placeholder="e.g. Class 12 (Pre-Medical)" /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Board</label><select className="adm-select"><option>FBISE</option><option>Punjab Board</option><option>KPK Board</option><option>Sindh Board</option><option>MDCAT/ECAT</option></select></div>
            <div className="adm-form-group"><label className="adm-label">Status</label><select className="adm-select"><option>Active</option><option>Draft</option></select></div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Class</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── SUBJECTS ── */
function SubjectsScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Subjects</div><div className="adm-page-subtitle">All subjects across classes</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Subject</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Subject</th><th>Class</th><th>Teacher</th><th>Chapters</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {subjects.map(s => (
                <tr key={s.id}>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ fontSize: 22 }}>{s.icon}</span><span style={{ fontWeight: 600 }}>{s.name}</span></div></td>
                  <td>{s.class}</td>
                  <td>{s.teacher}</td>
                  <td><span className="adm-badge purple">{s.chapters}</span></td>
                  <td><Badge status={s.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Add Subject" onClose={() => setAddOpen(false)} size="sm">
          <div className="adm-modal-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Subject Name</label><input className="adm-input" placeholder="e.g. Physics" /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Class</label><select className="adm-select"><option>Select class</option>{classes.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Assign Teacher</label><select className="adm-select"><option>Select teacher</option>{teachers.map(t => <option key={t.id}>{t.name}</option>)}</select></div>
            <div className="adm-form-group"><label className="adm-label">Emoji Icon</label><input className="adm-input" placeholder="e.g. ⚛️" maxLength={2} /></div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Subject</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── CHAPTERS ── */
function ChaptersScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Chapters</div><div className="adm-page-subtitle">Manage chapter content and locking</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Chapter</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Chapter</th><th>Subject</th><th>Notes</th><th>Videos</th><th>MCQs</th><th>Locked</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {chapters.map(c => (
                <tr key={c.id}>
                  <td style={{ fontWeight: 600 }}>{c.title}</td>
                  <td>{c.subject}</td>
                  <td>{c.notes}</td>
                  <td>{c.videos}</td>
                  <td>{c.mcqs}</td>
                  <td><span>{c.locked ? '🔒' : '🔓'}</span></td>
                  <td><Badge status={c.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Add Chapter" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Chapter Title</label><input className="adm-input" placeholder="e.g. Motion and Force" /></div>
              <div className="adm-form-group"><label className="adm-label required">Subject</label><select className="adm-select"><option>Select subject</option>{subjects.map(s => <option key={s.id}>{s.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label">Chapter Number</label><input className="adm-input" type="number" placeholder="1" /></div>
              <div className="adm-form-group"><label className="adm-label">Status</label><select className="adm-select"><option>Published</option><option>Draft</option></select></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group">
                <div className="adm-toggle-wrap"><button className="adm-toggle" /><span className="adm-toggle-label">Lock this chapter (requires paid subscription)</span></div>
              </div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Description</label><textarea className="adm-textarea" placeholder="Brief description of this chapter..." /></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Chapter</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── NOTES ── */
function NotesScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Notes</div><div className="adm-page-subtitle">Handwritten & typed study notes</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Upload Note</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Title</th><th>Subject</th><th>Type</th><th>Pages</th><th>Downloads</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {notes.map(n => (
                <tr key={n.id}>
                  <td style={{ fontWeight: 600 }}>{n.title}</td>
                  <td>{n.subject}</td>
                  <td><span className="adm-badge blue">{n.type}</span></td>
                  <td>{n.pages}</td>
                  <td>{n.downloads.toLocaleString()}</td>
                  <td><Badge status={n.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Upload Note" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Note Title</label><input className="adm-input" placeholder="e.g. Chapter 1 – Physics Notes" /></div>
              <div className="adm-form-group"><label className="adm-label required">Type</label><select className="adm-select"><option>Handwritten</option><option>Typed</option></select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Subject</label><select className="adm-select"><option>Select subject</option>{subjects.map(s => <option key={s.id}>{s.name}</option>)}</select></div>
              <div className="adm-form-group"><label className="adm-label required">Chapter</label><select className="adm-select"><option>Select chapter</option>{chapters.map(c => <option key={c.id}>{c.title}</option>)}</select></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label required">PDF File</label><div className="adm-upload-zone"><div className="adm-upload-icon">📄</div><div className="adm-upload-text">Drag PDF here or <strong>Browse</strong><br /><span style={{ fontSize: 11 }}>Max size: 50MB</span></div></div></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Upload Note</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── VIDEOS ── */
function VideosScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Videos</div><div className="adm-page-subtitle">Manage video lectures</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Video</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Title</th><th>Subject</th><th>Teacher</th><th>Duration</th><th>Views</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {videos.map(v => (
                <tr key={v.id}>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div className="adm-thumb">{v.thumb}</div><div><div style={{ fontWeight: 600 }}>{v.title}</div><div style={{ fontSize: 12, color: 'var(--muted)' }}>{v.chapter}</div></div></div></td>
                  <td>{v.subject}</td>
                  <td>{v.teacher}</td>
                  <td>{v.duration}</td>
                  <td>{v.views.toLocaleString()}</td>
                  <td><Badge status={v.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Add Video" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Video Title</label><input className="adm-input" placeholder="e.g. Introduction to Motion" /></div>
              <div className="adm-form-group"><label className="adm-label required">Teacher</label><select className="adm-select"><option>Select teacher</option>{teachers.map(t => <option key={t.id}>{t.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Subject</label><select className="adm-select"><option>Select subject</option>{subjects.map(s => <option key={s.id}>{s.name}</option>)}</select></div>
              <div className="adm-form-group"><label className="adm-label required">Chapter</label><select className="adm-select"><option>Select chapter</option>{chapters.map(c => <option key={c.id}>{c.title}</option>)}</select></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label required">YouTube / Drive URL</label><input className="adm-input" placeholder="https://youtube.com/watch?v=..." /></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Thumbnail</label><div className="adm-upload-zone"><div className="adm-upload-icon">🖼️</div><div className="adm-upload-text">Upload thumbnail or <strong>Browse</strong></div></div></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Video</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── STICKY NOTES ── */
function StickyNotesScreen() {
  const [addOpen, setAddOpen] = useState(false);
  const colors = ['#ffd166', '#06d6a0', '#a8dadc', '#ff6b6b', '#c77dff', '#ffb347'];
  const [pickedColor, setPickedColor] = useState(colors[0]);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Sticky Notes</div><div className="adm-page-subtitle">Quick reference sticky notes per chapter</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Sticky Note</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
        {stickyNotes.map(s => (
          <div key={s.id} style={{ background: s.color, borderRadius: 16, padding: 20, position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,.12)' }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{s.title}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6 }}>{s.content}</div>
            <div style={{ marginTop: 14, fontSize: 12, opacity: .7 }}>{s.subject} · {s.chapter}</div>
            <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', gap: 6 }}>
              <button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon" style={{ background: 'rgba(255,255,255,.5)' }}>✏️</button>
              <button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon" style={{ background: 'rgba(255,255,255,.5)' }}>🗑️</button>
            </div>
          </div>
        ))}
        <div onClick={() => setAddOpen(true)} style={{ border: '2px dashed #ccc', borderRadius: 16, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', minHeight: 140, color: 'var(--muted)' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 32, marginBottom: 8 }}>➕</div><div>Add Sticky Note</div></div>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Add Sticky Note" onClose={() => setAddOpen(false)} size="sm">
          <div className="adm-modal-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Title</label><input className="adm-input" placeholder="e.g. Important Equations" /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Content</label><textarea className="adm-textarea" placeholder="Sticky note content..." style={{ minHeight: 80 }} /></div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label">Subject</label><select className="adm-select"><option>Select subject</option>{subjects.map(s => <option key={s.id}>{s.name}</option>)}</select></div>
              <div className="adm-form-group"><label className="adm-label">Chapter</label><select className="adm-select"><option>Select chapter</option>{chapters.map(c => <option key={c.id}>{c.title}</option>)}</select></div>
            </div>
            <div className="adm-form-group" style={{ marginTop: 8 }}>
              <label className="adm-label">Color</label>
              <div className="adm-color-row" style={{ marginTop: 8 }}>
                {colors.map(c => <div key={c} className={`adm-color-swatch ${pickedColor === c ? 'selected' : ''}`} style={{ background: c }} onClick={() => setPickedColor(c)} />)}
              </div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Note</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── LIVE MCQ ── */
function MCQScreen() {
  const [addOpen, setAddOpen] = useState(false);
  const [questions, setQuestions] = useState([{ q: '', options: ['', '', '', ''], correct: 0 }]);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Live MCQ</div><div className="adm-page-subtitle">Create and manage MCQ quiz sessions</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Create MCQ Set</button>
      </div>
      <div className="adm-grid-3" style={{ marginBottom: 0 }}>
        {mcqSets.map(m => (
          <div key={m.id} className="adm-card" style={{ marginBottom: 20 }}>
            <div className="adm-card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{m.title}</div>
                <Badge status={m.status} />
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14 }}>{m.subject} · {m.chapter}</div>
              <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
                <div><span style={{ fontWeight: 700 }}>{m.questions}</span> <span style={{ color: 'var(--muted)' }}>Questions</span></div>
                <div><span style={{ fontWeight: 700 }}>{m.duration}</span></div>
                <div><span style={{ fontWeight: 700 }}>{m.participants}</span> <span style={{ color: 'var(--muted)' }}>Participants</span></div>
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                <button className="adm-btn adm-btn-outline adm-btn-sm" style={{ flex: 1 }}>✏️ Edit</button>
                {m.status === 'Active' && <button className="adm-btn adm-btn-primary adm-btn-sm" style={{ flex: 1 }}>▶ Live</button>}
              </div>
            </div>
          </div>
        ))}
      </div>
      {addOpen && (
        <ModalShell title="Create MCQ Set" onClose={() => setAddOpen(false)} size="large">
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Set Title</label><input className="adm-input" placeholder="e.g. Physics Ch1 Live Quiz" /></div>
              <div className="adm-form-group"><label className="adm-label required">Subject</label><select className="adm-select"><option>Select subject</option>{subjects.map(s => <option key={s.id}>{s.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label">Duration (minutes)</label><input className="adm-input" type="number" defaultValue={20} /></div>
              <div className="adm-form-group"><label className="adm-label">Schedule Date</label><input className="adm-input" type="datetime-local" /></div>
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: 'var(--ink)' }}>Questions</div>
              {questions.map((q, qi) => (
                <div key={qi} style={{ border: '1.5px solid var(--line-strong)', borderRadius: 12, padding: 16, marginBottom: 12 }}>
                  <div className="adm-form-group" style={{ marginBottom: 12 }}>
                    <label className="adm-label">Q{qi + 1}. Question</label>
                    <input className="adm-input" placeholder="Type question..." />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {['A', 'B', 'C', 'D'].map((opt, oi) => (
                      <div key={opt} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ width: 28, height: 28, borderRadius: 8, background: q.correct === oi ? 'var(--green)' : 'var(--purple-100)', color: q.correct === oi ? '#fff' : 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, cursor: 'pointer', flexShrink: 0 }} onClick={() => { const nq = [...questions]; nq[qi].correct = oi; setQuestions(nq); }}>{opt}</span>
                        <input className="adm-input" placeholder={`Option ${opt}`} style={{ fontSize: 13 }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button className="adm-btn adm-btn-outline adm-btn-sm" onClick={() => setQuestions([...questions, { q: '', options: ['', '', '', ''], correct: 0 }])}>+ Add Question</button>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-outline">Save as Draft</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Publish MCQ Set</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── IMPORTANT QUESTIONS ── */
function ImportantQuestionsScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Important Questions</div><div className="adm-page-subtitle">Exam-important questions curated by teachers</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Question</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>#</th><th>Question</th><th>Subject</th><th>Marks</th><th>Year</th><th>Frequency</th><th>Actions</th></tr></thead>
            <tbody>
              {importantQuestions.map((q, i) => (
                <tr key={q.id}>
                  <td>{i + 1}</td>
                  <td style={{ maxWidth: 340 }}>{q.question}</td>
                  <td>{q.subject}</td>
                  <td><span className="adm-badge blue">{q.marks} marks</span></td>
                  <td>{q.year}</td>
                  <td><Badge status={q.frequency} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Add Important Question" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label required">Question</label><textarea className="adm-textarea" placeholder="Enter the important question..." /></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Subject</label><select className="adm-select"><option>Select subject</option>{subjects.map(s => <option key={s.id}>{s.name}</option>)}</select></div>
              <div className="adm-form-group"><label className="adm-label required">Chapter</label><select className="adm-select"><option>Select chapter</option>{chapters.map(c => <option key={c.id}>{c.title}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label">Marks</label><input className="adm-input" type="number" placeholder="5" /></div>
              <div className="adm-form-group"><label className="adm-label">Exam Year</label><input className="adm-input" placeholder="2023" /></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Frequency</label><select className="adm-select"><option>High</option><option>Medium</option><option>Low</option></select></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Question</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── PAST PAPERS ── */
function PastPapersScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Past Papers</div><div className="adm-page-subtitle">Board exam past papers library</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Upload Paper</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Paper</th><th>Class</th><th>Board</th><th>Year</th><th>Type</th><th>Downloads</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {pastPapers.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.title}</td>
                  <td>{p.class}</td>
                  <td>{p.board}</td>
                  <td>{p.year}</td>
                  <td><span className="adm-badge blue">{p.type}</span></td>
                  <td>{p.downloads.toLocaleString()}</td>
                  <td><Badge status={p.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Upload Past Paper" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Paper Title</label><input className="adm-input" placeholder="e.g. Physics Annual 2023" /></div>
              <div className="adm-form-group"><label className="adm-label required">Class</label><select className="adm-select"><option>Select class</option>{classes.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Board</label><select className="adm-select"><option>FBISE</option><option>Punjab Board</option><option>KPK Board</option><option>Sindh Board</option></select></div>
              <div className="adm-form-group"><label className="adm-label required">Year</label><input className="adm-input" type="number" placeholder="2023" /></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label required">PDF File</label><div className="adm-upload-zone"><div className="adm-upload-icon">📋</div><div className="adm-upload-text">Upload past paper PDF or <strong>Browse</strong></div></div></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Upload Paper</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── PACKAGES ── */
function PackagesScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Packages</div><div className="adm-page-subtitle">Subscription packages & pricing</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Add Package</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
        {packages.map(p => (
          <div key={p.id} className="adm-pkg-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                {p.featured && <div className="adm-pkg-tag">⭐ Featured</div>}
                <div className="adm-pkg-name">{p.name}</div>
              </div>
              <Badge status={p.status} />
            </div>
            <div className="adm-pkg-price">₨{p.price.toLocaleString()} <span>/ year</span></div>
            <div style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'line-through', marginBottom: 8 }}>₨{p.originalPrice.toLocaleString()}</div>
            <ul className="adm-pkg-features">
              {p.subjects.map(s => <li key={s}>{s}</li>)}
            </ul>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button className="adm-btn adm-btn-outline adm-btn-sm">✏️ Edit</button>
              <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>{p.students} students</span>
            </div>
          </div>
        ))}
      </div>
      {addOpen && (
        <ModalShell title="Add Package" onClose={() => setAddOpen(false)}>
          <div className="adm-modal-body">
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Package Name</label><input className="adm-input" placeholder="e.g. Full Bundle – Class 12" /></div>
              <div className="adm-form-group"><label className="adm-label required">Class</label><select className="adm-select"><option>Select class</option>{classes.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Price (PKR)</label><input className="adm-input" type="number" placeholder="2999" /></div>
              <div className="adm-form-group"><label className="adm-label">Original Price</label><input className="adm-input" type="number" placeholder="4999" /></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Included Subjects</label><div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>{subjects.map(s => <label key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, cursor: 'pointer' }}><input type="checkbox" />{s.name}</label>)}</div></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-toggle-wrap"><button className="adm-toggle" /><span className="adm-toggle-label">Mark as Featured package</span></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Add Package</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── PAYMENTS ── */
function PaymentsScreen() {
  const total = payments.filter(p => p.status === 'Paid').reduce((a, p) => a + p.amount, 0);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Payments</div><div className="adm-page-subtitle">Transaction history and revenue tracking</div></div>
        <button className="adm-btn adm-btn-outline adm-btn-sm">📤 Export CSV</button>
      </div>
      <div className="adm-stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 24 }}>
        <div className="adm-stat-card green"><div className="adm-stat-icon">💰</div><div className="adm-stat-value">₨{total.toLocaleString()}</div><div className="adm-stat-label">Total Revenue</div></div>
        <div className="adm-stat-card orange"><div className="adm-stat-icon">⏳</div><div className="adm-stat-value">{payments.filter(p => p.status === 'Pending').length}</div><div className="adm-stat-label">Pending Payments</div></div>
        <div className="adm-stat-card purple"><div className="adm-stat-icon">❌</div><div className="adm-stat-value">{payments.filter(p => p.status === 'Failed').length}</div><div className="adm-stat-label">Failed Transactions</div></div>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Student</th><th>Package</th><th>Amount</th><th>Method</th><th>Date</th><th>Tx ID</th><th>Status</th></tr></thead>
            <tbody>
              {payments.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.student}</td>
                  <td style={{ fontSize: 12, color: 'var(--muted)' }}>{p.pkg}</td>
                  <td style={{ fontWeight: 700 }}>₨{p.amount.toLocaleString()}</td>
                  <td><span className="adm-badge blue">{p.method}</span></td>
                  <td style={{ color: 'var(--muted)', fontSize: 13 }}>{p.date}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{p.txId}</td>
                  <td><Badge status={p.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ── COUPONS ── */
function CouponsScreen() {
  const [addOpen, setAddOpen] = useState(false);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Coupons</div><div className="adm-page-subtitle">Discount codes and promotions</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>+ Create Coupon</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Code</th><th>Type</th><th>Value</th><th>Min Order</th><th>Uses</th><th>Expiry</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {coupons.map(c => (
                <tr key={c.id}>
                  <td><span style={{ fontFamily: 'monospace', fontWeight: 700, background: 'var(--purple-100)', color: 'var(--purple)', padding: '3px 8px', borderRadius: 6 }}>{c.code}</span></td>
                  <td>{c.type}</td>
                  <td style={{ fontWeight: 700 }}>{c.type === 'Percent' ? `${c.value}%` : `₨${c.value}`}</td>
                  <td>₨{c.minOrder}</td>
                  <td>
                    <div>{c.uses}/{c.maxUses}</div>
                    <div className="adm-progress" style={{ width: 80, marginTop: 4 }}><div className="adm-progress-fill" style={{ width: `${(c.uses / c.maxUses) * 100}%` }} /></div>
                  </td>
                  <td style={{ fontSize: 13, color: 'var(--muted)' }}>{c.expiry}</td>
                  <td><Badge status={c.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Create Coupon" onClose={() => setAddOpen(false)} size="sm">
          <div className="adm-modal-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label required">Coupon Code</label><input className="adm-input" placeholder="e.g. SAVE30" style={{ fontFamily: 'monospace', textTransform: 'uppercase' }} /></div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label required">Type</label><select className="adm-select"><option>Percent</option><option>Fixed</option></select></div>
              <div className="adm-form-group"><label className="adm-label required">Value</label><input className="adm-input" type="number" placeholder="30" /></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label">Min Order (PKR)</label><input className="adm-input" type="number" placeholder="0" /></div>
              <div className="adm-form-group"><label className="adm-label">Max Uses</label><input className="adm-input" type="number" placeholder="500" /></div>
            </div>
            <div className="adm-form-group"><label className="adm-label required">Expiry Date</label><input className="adm-input" type="date" /></div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Create Coupon</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── BLOGS ── */
function BlogsScreen() {
  const [addOpen, setAddOpen] = useState(false);
  const tools = ['B', 'I', 'U', 'H1', 'H2', '• List', '1. List', '🔗', '🖼️', '❝'];
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Blogs</div><div className="adm-page-subtitle">Manage blog posts and articles</div></div>
        <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(true)}>✍️ Write Blog</button>
      </div>
      <div className="adm-card">
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead><tr><th>Title</th><th>Author</th><th>Category</th><th>Views</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {blogs.map(b => (
                <tr key={b.id}>
                  <td style={{ fontWeight: 600, maxWidth: 280 }}>{b.title}</td>
                  <td>{b.author}</td>
                  <td><span className="adm-badge purple">{b.category}</span></td>
                  <td>{b.views.toLocaleString()}</td>
                  <td style={{ fontSize: 13, color: 'var(--muted)' }}>{b.date}</td>
                  <td><Badge status={b.status} /></td>
                  <td><div style={{ display: 'flex', gap: 6 }}><button className="adm-btn adm-btn-ghost adm-btn-sm adm-btn-icon">✏️</button><button className="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon">🗑️</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addOpen && (
        <ModalShell title="Write Blog Post" onClose={() => setAddOpen(false)} size="large">
          <div className="adm-modal-body">
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label required">Blog Title</label><input className="adm-input" placeholder="Enter blog title..." style={{ fontSize: 15 }} /></div>
            </div>
            <div className="adm-form-row cols-2">
              <div className="adm-form-group"><label className="adm-label">Category</label><select className="adm-select"><option>Study Tips</option><option>Entrance Test</option><option>Physics</option><option>Chemistry</option><option>News</option></select></div>
              <div className="adm-form-group"><label className="adm-label">Author</label><select className="adm-select"><option>Admin</option>{teachers.map(t => <option key={t.id}>{t.name}</option>)}</select></div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group">
                <label className="adm-label required">Content</label>
                <div style={{ marginTop: 6 }}>
                  <div className="adm-editor-toolbar">{tools.map(t => <button key={t} className="adm-editor-tool">{t}</button>)}</div>
                  <div className="adm-editor-body" contentEditable suppressContentEditableWarning placeholder="Write blog content here..." />
                </div>
              </div>
            </div>
            <div className="adm-form-row">
              <div className="adm-form-group"><label className="adm-label">Featured Image</label><div className="adm-upload-zone"><div className="adm-upload-icon">🖼️</div><div className="adm-upload-text">Upload cover image or <strong>Browse</strong></div></div></div>
            </div>
          </div>
          <div className="adm-modal-footer">
            <button className="adm-btn adm-btn-ghost" onClick={() => setAddOpen(false)}>Cancel</button>
            <button className="adm-btn adm-btn-outline">Save Draft</button>
            <button className="adm-btn adm-btn-primary" onClick={() => setAddOpen(false)}>Publish</button>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

/* ── REVIEWS ── */
function ReviewsScreen() {
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Reviews</div><div className="adm-page-subtitle">Student reviews and moderation</div></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {reviews.map(r => (
          <div key={r.id} className="adm-card">
            <div className="adm-card-body" style={{ display: 'flex', gap: 16 }}>
              <Avatar name={r.student} color={r.status === 'Approved' ? 'green' : 'orange'} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ fontWeight: 700 }}>{r.student}</div>
                  <Badge status={r.status} />
                </div>
                <div style={{ color: '#f6b50e', fontSize: 14, marginBottom: 6 }}>{'⭐'.repeat(r.rating)}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.6 }}>{r.text}</div>
                <div style={{ fontSize: 12, color: 'var(--faint)', marginTop: 8 }}>{r.subject} · {r.date}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button className="adm-btn adm-btn-ghost adm-btn-sm">✓ Approve</button>
                <button className="adm-btn adm-btn-danger adm-btn-sm">✕ Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── ISSUES ── */
function IssuesScreen() {
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Reported Issues</div><div className="adm-page-subtitle">Student-reported problems and bugs</div></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {reportedIssues.map(r => (
          <div key={r.id} className="adm-card">
            <div className="adm-card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{r.type}</div>
                <div style={{ display: 'flex', gap: 8 }}><Badge status={r.priority} /><Badge status={r.status} /></div>
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--text)', marginBottom: 10 }}>{r.description}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', gap: 16 }}>
                <span>👤 {r.student}</span>
                <span>📅 {r.date}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button className="adm-btn adm-btn-ghost adm-btn-sm">💬 Reply</button>
                <button className="adm-btn adm-btn-outline adm-btn-sm">✓ Mark Resolved</button>
                <button className="adm-btn adm-btn-danger adm-btn-sm">🗑️ Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── HOMEPAGE CONTENT ── */
function HomepageScreen() {
  const [data, setData] = useState({ ...homepageContent });
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Homepage Content</div><div className="adm-page-subtitle">Edit student-facing homepage text and stats</div></div>
        <button className="adm-btn adm-btn-primary">💾 Save Changes</button>
      </div>
      <div className="adm-grid-2">
        <div className="adm-card">
          <div className="adm-card-header"><div className="adm-card-title">Hero Section</div></div>
          <div className="adm-card-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Hero Title</label><input className="adm-input" value={data.heroTitle} onChange={e => setData({ ...data, heroTitle: e.target.value })} /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Hero Subtitle</label><textarea className="adm-textarea" value={data.heroSubtitle} onChange={e => setData({ ...data, heroSubtitle: e.target.value })} style={{ minHeight: 72 }} /></div>
            <div className="adm-form-group"><label className="adm-label">CTA Button Text</label><input className="adm-input" value={data.heroCTA} onChange={e => setData({ ...data, heroCTA: e.target.value })} /></div>
          </div>
        </div>
        <div className="adm-card">
          <div className="adm-card-header"><div className="adm-card-title">Stats Section</div></div>
          <div className="adm-card-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Students Count</label><input className="adm-input" value={data.statsStudents} onChange={e => setData({ ...data, statsStudents: e.target.value })} /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Videos Count</label><input className="adm-input" value={data.statsVideos} onChange={e => setData({ ...data, statsVideos: e.target.value })} /></div>
            <div className="adm-form-group"><label className="adm-label">Teachers Count</label><input className="adm-input" value={data.statsTeachers} onChange={e => setData({ ...data, statsTeachers: e.target.value })} /></div>
          </div>
        </div>
      </div>
      <div className="adm-card">
        <div className="adm-card-header"><div className="adm-card-title">Hero Banner Image</div></div>
        <div className="adm-card-body">
          <div className="adm-upload-zone"><div className="adm-upload-icon">🖼️</div><div className="adm-upload-text">Upload new hero banner or <strong>Browse</strong><br /><span style={{ fontSize: 11 }}>Recommended: 1280×720px, PNG/JPG</span></div></div>
        </div>
      </div>
    </div>
  );
}

/* ── SITE SETTINGS ── */
function SettingsScreen() {
  const [cfg, setCfg] = useState({ ...siteSettings });
  const upd = (k, v) => setCfg(p => ({ ...p, [k]: v }));
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Site Settings</div><div className="adm-page-subtitle">Global configuration for Nexu Guru</div></div>
        <button className="adm-btn adm-btn-primary">💾 Save Settings</button>
      </div>
      <div className="adm-grid-2">
        <div className="adm-card">
          <div className="adm-card-header"><div className="adm-card-title">General</div></div>
          <div className="adm-card-body">
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Site Name</label><input className="adm-input" value={cfg.siteName} onChange={e => upd('siteName', e.target.value)} /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Tagline</label><input className="adm-input" value={cfg.tagline} onChange={e => upd('tagline', e.target.value)} /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Contact Email</label><input className="adm-input" type="email" value={cfg.contactEmail} onChange={e => upd('contactEmail', e.target.value)} /></div>
            <div className="adm-form-group" style={{ marginBottom: 16 }}><label className="adm-label">Phone</label><input className="adm-input" value={cfg.contactPhone} onChange={e => upd('contactPhone', e.target.value)} /></div>
            <div className="adm-form-group"><label className="adm-label">Address</label><input className="adm-input" value={cfg.address} onChange={e => upd('address', e.target.value)} /></div>
          </div>
        </div>
        <div className="adm-card">
          <div className="adm-card-header"><div className="adm-card-title">Features & Toggles</div></div>
          <div className="adm-card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { key: 'maintenanceMode', label: 'Maintenance Mode', desc: 'Show maintenance page to all visitors' },
                { key: 'allowRegistration', label: 'Allow Registration', desc: 'New students can sign up' },
                { key: 'enableReviews', label: 'Enable Reviews', desc: 'Allow students to submit reviews' },
              ].map(({ key, label, desc }) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #f0eef8' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{desc}</div>
                  </div>
                  <button className={`adm-toggle ${cfg[key] ? 'on' : ''}`} onClick={() => upd(key, !cfg[key])} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="adm-card">
        <div className="adm-card-header"><div className="adm-card-title">Brand Colors</div></div>
        <div className="adm-card-body">
          <div className="adm-form-row cols-2">
            <div className="adm-form-group"><label className="adm-label">Primary Color</label><div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><input type="color" value={cfg.primaryColor} onChange={e => upd('primaryColor', e.target.value)} style={{ width: 44, height: 44, borderRadius: 8, border: 'none', cursor: 'pointer' }} /><input className="adm-input" value={cfg.primaryColor} onChange={e => upd('primaryColor', e.target.value)} style={{ fontFamily: 'monospace' }} /></div></div>
            <div className="adm-form-group"><label className="adm-label">Accent Color</label><div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><input type="color" value={cfg.accentColor} onChange={e => upd('accentColor', e.target.value)} style={{ width: 44, height: 44, borderRadius: 8, border: 'none', cursor: 'pointer' }} /><input className="adm-input" value={cfg.accentColor} onChange={e => upd('accentColor', e.target.value)} style={{ fontFamily: 'monospace' }} /></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ANALYTICS ── */
function AnalyticsScreen() {
  const maxRev = Math.max(...revenueData);
  return (
    <div>
      <div className="adm-page-header">
        <div><div className="adm-page-title">Analytics</div><div className="adm-page-subtitle">Platform performance insights</div></div>
      </div>
      <div className="adm-stats-grid">
        <div className="adm-stat-card purple"><div className="adm-stat-icon">👁️</div><div className="adm-stat-value">84.2k</div><div className="adm-stat-label">Page Views (30d)</div></div>
        <div className="adm-stat-card orange"><div className="adm-stat-icon">🎥</div><div className="adm-stat-value">42.6k</div><div className="adm-stat-label">Video Views (30d)</div></div>
        <div className="adm-stat-card green"><div className="adm-stat-icon">📥</div><div className="adm-stat-value">18.3k</div><div className="adm-stat-label">Note Downloads (30d)</div></div>
        <div className="adm-stat-card blue"><div className="adm-stat-icon">⏱️</div><div className="adm-stat-value">24 min</div><div className="adm-stat-label">Avg. Session Time</div></div>
      </div>
      <div className="adm-grid-2">
        <div className="adm-card">
          <div className="adm-card-header"><div className="adm-card-title">Monthly Revenue Trend</div></div>
          <div className="adm-card-body">
            <div className="adm-chart-area">
              {revenueData.map((v, i) => <div key={i} className="adm-chart-bar" style={{ height: `${(v / maxRev) * 100}%` }} />)}
            </div>
            <div className="adm-chart-months" style={{ marginTop: 8 }}>
              {revenueMonths.map(m => <div key={m} className="adm-chart-month">{m}</div>)}
            </div>
          </div>
        </div>
        <div className="adm-card">
          <div className="adm-card-header"><div className="adm-card-title">Top Subjects by Views</div></div>
          <div className="adm-card-body">
            {[
              { label: 'Physics', pct: 38, color: '' },
              { label: 'Chemistry', pct: 27, color: 'orange' },
              { label: 'Mathematics', pct: 20, color: 'green' },
              { label: 'Biology', pct: 15, color: '' },
            ].map(s => (
              <div key={s.label} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}><span style={{ fontWeight: 600 }}>{s.label}</span><span style={{ color: 'var(--muted)' }}>{s.pct}%</span></div>
                <div className="adm-progress"><div className={`adm-progress-fill ${s.color}`} style={{ width: `${s.pct}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   MAIN ADMIN PAGE
   ================================================================ */
const SCREENS = {
  dashboard: DashboardScreen,
  analytics: AnalyticsScreen,
  students: StudentsScreen,
  teachers: TeachersScreen,
  classes: ClassesScreen,
  subjects: SubjectsScreen,
  chapters: ChaptersScreen,
  notes: NotesScreen,
  videos: VideosScreen,
  'sticky-notes': StickyNotesScreen,
  mcq: MCQScreen,
  'important-questions': ImportantQuestionsScreen,
  'past-papers': PastPapersScreen,
  packages: PackagesScreen,
  payments: PaymentsScreen,
  coupons: CouponsScreen,
  blogs: BlogsScreen,
  reviews: ReviewsScreen,
  issues: IssuesScreen,
  homepage: HomepageScreen,
  settings: SettingsScreen,
};

export default function AdminDashboard() {
  const [active, setActive] = useState('dashboard');
  const [role, setRole] = useState('admin'); // 'admin' | 'teacher'
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nav = role === 'admin' ? ADMIN_NAV : TEACHER_NAV;

  const getTitle = () => {
    for (const s of nav) {
      const item = s.items.find(i => i.key === active);
      if (item) return item.label;
    }
    return 'Dashboard';
  };

  const ActiveScreen = SCREENS[active] || DashboardScreen;

  return (
    <div className="adm-root">
      {/* Sidebar */}
      <aside className={`adm-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Logo */}
        <a className="adm-sidebar-logo" href="/">
          <div className="adm-sidebar-logo-wrap">
            <img src={logoImg} alt="Nexu Guru" className="adm-sidebar-logo-img" />
          </div>
          <span className="adm-sidebar-logo-badge">Admin Panel</span>
        </a>

        {/* Role Switcher */}
        <div className="adm-role-switcher">
          <button className={`adm-role-btn ${role === 'admin' ? 'active' : ''}`} onClick={() => { setRole('admin'); setActive('dashboard'); }}>🛡️ Admin</button>
          <button className={`adm-role-btn ${role === 'teacher' ? 'active' : ''}`} onClick={() => { setRole('teacher'); setActive('dashboard'); }}>👨‍🏫 Teacher</button>
        </div>

        {/* Nav */}
        <nav className="adm-nav">
          {nav.map(section => (
            <div key={section.section} className="adm-nav-section">
              <div className="adm-nav-section-label">{section.section}</div>
              {section.items.map(item => (
                <button
                  key={item.key}
                  className={`adm-nav-item ${active === item.key ? 'active' : ''}`}
                  onClick={() => { setActive(item.key); setSidebarOpen(false); }}
                >
                  <span className="adm-nav-icon">{item.icon}</span>
                  {item.label}
                  {item.badge && <span className="adm-nav-badge">{item.badge}</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="adm-sidebar-footer">
          <div className="adm-sidebar-user">
            <div className="adm-sidebar-avatar">{role === 'admin' ? 'A' : 'T'}</div>
            <div>
              <div className="adm-sidebar-user-name">{role === 'admin' ? 'Admin User' : 'Dr. Kamran Ali'}</div>
              <div className="adm-sidebar-user-role">{role === 'admin' ? 'Super Admin' : 'Physics Teacher'}</div>
            </div>
            <span className="adm-sidebar-user-icon">⚙</span>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      <header className="adm-topbar">
        <button
          style={{ display: 'none', background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: 'var(--ink)', padding: 4, borderRadius: 8 }}
          className="adm-topbar-hamburger"
          onClick={() => setSidebarOpen(o => !o)}
        >
          ☰
        </button>
        <div className="adm-topbar-title">
          {getTitle()}
          <span>Nexu Guru {role === 'admin' ? 'Admin' : 'Teacher'} Dashboard</span>
        </div>

        <div className="adm-topbar-search">
          <span className="adm-topbar-search-icon">🔍</span>
          <input placeholder="Search anything..." />
        </div>

        <div className="adm-topbar-actions">
          <button className="adm-topbar-btn" title="Notifications">🔔<span className="badge" /></button>
          <button className="adm-topbar-btn" title="Messages">💬</button>
          <div className="adm-topbar-profile">
            <div className="adm-topbar-prof-avatar">{role === 'admin' ? 'A' : 'K'}</div>
            <div>
              <div className="adm-topbar-prof-name">{role === 'admin' ? 'Admin User' : 'Dr. Kamran'}</div>
              <div className="adm-topbar-prof-role">{role === 'admin' ? 'Super Admin' : 'Teacher'}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="adm-main">
        <ActiveScreen />
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.4)', zIndex: 150 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
