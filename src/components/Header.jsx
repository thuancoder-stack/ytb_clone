import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [q, setQ] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const keyword = q.trim();
        if (!keyword) return;
        navigate(`/search?q=${encodeURIComponent(keyword)}`);
    };

    return (
        <header className="header">
            <div className="header__inner">
                <button className="header__brand" onClick={() => navigate('/')}>
                    ytb
                </button>

                <form className="header__search" onSubmit={onSubmit}>
                    <input
                        className="header__input"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Tìm kiếm"
                    />
                    <button className="header__btn" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}
