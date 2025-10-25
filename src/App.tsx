import React, {useState} from 'react';
import './button_theme.css';
import './anchorTheme.css';
// Import your CSS file
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
        <div className="home_page_main_area">
            <div id="bread_crumb_menu"></div>
            <div id="two_boxes_horizontal">
                <div id="side_menu">
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Account</a>
                </div>
                <div id="content_area">
                    <div id="button_area">
                        <div id ="previous_button_area">
                             <button id="button_area_prev" >Previous</button>
                        </div>
                        <div id="next_button_area">
                            <button id="button_area_next" >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
