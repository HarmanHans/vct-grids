import { useState } from 'react';

function Grid() {
    const [cells, setCells] = useState(Array(16).fill(""));
    const initialText: { [key : number]: JSX.Element } = {
        0: <p className="rarity">Rarity Score: 0.00</p>,
        1: <p className='rarity'>20+ Kills in a Match</p>,
        2: <p className='rarity'>Has Played Fade</p>,
        3: <p className='rarity'>Played at a Masters/Champs</p>,
        4: <p className='rarity'>Played Against MaKo</p>,
        8: <p className='rarity'>Has Played Sova</p>,
        12: <p className='rarity'>Played Against Governor</p>
    };

    return(
        <div className="content-wrapper">
            <div className="grid-wrapper">
                <div className="grid">
                    {cells.map((_, index) => (
                        <div key={index} className={index == 0  ? "rarity-cell" : (index > 3 && index % 4 != 0) ? "game-cell": "other-cell"}>
                            {initialText[index] || null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Grid;