import "./ReadingList.css"

const ReadingList = () => {

    return (
        <>
            <div className="reading-list-main">
                <h2>Reading List </h2>
                <ul className="reading-list-container">
                    <div className="reading-list">
                        <li className="reading-list-items">Added book</li>
                        <button>Delete</button>
                    </div>
                    <div className="reading-list">
                        <li className="reading-list-items">Added book</li>
                        <button>Delete</button>
                    </div>
                    <div className="reading-list">
                        <li className="reading-list-items">Added book</li>
                        <button>Delete</button>
                    </div>
                    <div className="reading-list">
                        <li className="reading-list-items">Added book</li>
                        <button>Delete</button>
                    </div>
                    
                </ul>
            </div>
            
        </>
    );
};

export default ReadingList