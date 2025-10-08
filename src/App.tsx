import React, {useState} from 'react';
import './button_theme.css'; // Import your CSS file
import './App.css';

function App() {
    const totalImagesLinks = [
        {
            url: "https://randomuser.me/api/portraits/men/1.jpg",
            desc: "First Man Image",
            studentId: "606364"
        },
        {
            url: "https://randomuser.me/api/portraits/women/1.jpg",
            desc: "First Woman Image",
            studentId: "123456"
        },
        {
            url: "https://randomuser.me/api/portraits/men/2.jpg",
            desc: "Second Men Image",
            studentId: "7778899"
        },
        {
            url: "https://randomuser.me/api/portraits/women/2.jpg",
            desc: "Second Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/3.jpg",
            desc: "Third Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/3.jpg",
            desc: "Third Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/4.jpg",
            desc: "Forth Men Image",
            studentId: ""

        },
        {
            url: "https://randomuser.me/api/portraits/women/4.jpg",
            desc: "Forth Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/5.jpg",
            desc: "Fifth Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/5.jpg",
            desc: "Fifth Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/6.jpg",
            desc: "Sixth Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/6.jpg",
            desc: "Sixth Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/7.jpg",
            desc: "Seventh Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/7.jpg",
            desc: "Seventh Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/8.jpg",
            desc: "Eight Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/8.jpg",
            desc: "Eight Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/9.jpg",
            desc: "Ninth Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/9.jpg",
            desc: "Ninth Woman Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/men/10.jpg",
            desc: "Tenth Men Image",
            studentId: ""
        },
        {
            url: "https://randomuser.me/api/portraits/women/10.jpg",
            desc: "Tenth Woman Image",
            studentId: ""
        }]
    const [imagesLinks, setImagesLinks] =useState(totalImagesLinks.slice(0, 5));
    const [pageNumber, setPageNumber] = useState(1);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    let totalPageNumbers = totalImagesLinks.length / 5

    function previousClicked(){
        if(pageNumber <= 1){return;}
        setPageNumber(pageNumber - 1);
        setImagesLinks(totalImagesLinks.slice(pageNumber * 5, (pageNumber + 1) * 5));
        if (pageNumber ===1) {

            setIsFirstPage(true);
        }
        setIsLastPage(false);

    }
    function nextClicked(){
        if(pageNumber >= totalPageNumbers){return;}
        setPageNumber(pageNumber + 1);
        setImagesLinks(totalImagesLinks.slice(pageNumber * 5, (pageNumber + 1) * 5));
        console.log(imagesLinks);
        console.log(totalImagesLinks);

        if (pageNumber >= totalPageNumbers){
            setIsLastPage(true);
        }
        setIsFirstPage(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="primeAssetArea">
                    <h1> MyBook – The Smarter Way for College Students to Connect, Share, and Thrive</h1>
                </div>
                <article className="home_page_main_area">
                    <section id="avatarSection">
                        <div className="avatar-container">
                            {imagesLinks.map((image: any, index: number) => (
                                <div className="avatar" key={index} >
                                    <img src={image.url} alt={image.desc}></img>
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="buttons_row">
                        <button style={{
                            'opacity': isFirstPage ? '0.6' : '1.0',
                            'cursor': isFirstPage ? 'not-allowed' : 'allowed',
                        }} onClick={previousClicked} >Previous</button>
                        <button style={{
                            'opacity': isLastPage? '0.6' : '1.0',
                            'cursor': isLastPage ? 'not-allowed' : 'allowed',
                        }} className="previousButtonStyle" onClick={nextClicked} >Next</button>
                    </div>
                </article>
            </header>
        </div>
    );
}

export default App;
