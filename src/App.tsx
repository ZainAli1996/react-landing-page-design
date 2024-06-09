import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './images/logo.svg';
import chair from './images/chair.png';
import whiteBed from './images/white-bed.png';
import brownSofa from './images/brown-sofa.png';
import tableWithChair from './images/table-with-chair.png';


const firstFoldTopData = [
    {
        "id": 1,
        "title": "FurniLux - Your Brand for Stylish Living",
        "description": "Discover a fusion of modern design and functionality, crafted to elevate every corner of your living space. FurniLux, redefining stylish living for you.",
        "imageUrl": "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
    }
];


const firstFoldBottomData = [
    {
        "id": 1,
        "title": "Sofa",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    },
    {
        "id": 2,
        "title": "Bed",
        "imageUrl": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
    },
    {
        "id": 3,
        "title": "Dresser",
        "imageUrl": "https://images.pexels.com/photos/8988967/pexels-photo-8988967.jpeg"
    },
    {
        "id": 4,
        "title": "Shelf",
        "imageUrl": "https://images.pexels.com/photos/2062427/pexels-photo-2062427.jpeg"
    },
    {
        "id": 5,
        "title": "Lamp",
        "imageUrl": "https://images.pexels.com/photos/929661/pexels-photo-929661.jpeg"
    },
    {
        "id": 6,
        "title": "Decor",
        "imageUrl": "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg"
    }
];


const livingRoomFurniture = [
    {
        "id": 1,
        "title": "Comfortable Sofa",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    }, {

        "id": 2,
        "title": "Elegant Side Table",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/7358158/pexels-photo-7358158.jpeg"
    }, {

        "id": 3,
        "title": "Classy Padded Chair",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/6214879/pexels-photo-6214879.jpeg"
    }
];


const allFurniture = [
    {
        "id": 1,
        "title": "Comfortable Sofa",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    }, {

        "id": 2,
        "title": "Elegant Side Table",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/7358158/pexels-photo-7358158.jpeg"
    }, {

        "id": 3,
        "title": "Classy Padded Chair",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/6214879/pexels-photo-6214879.jpeg"
    },
    {
        "id": 4,
        "title": "Comfortable Sofa",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    }, {

        "id": 5,
        "title": "Elegant Side Table",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/7358158/pexels-photo-7358158.jpeg"
    }, {

        "id": 6,
        "title": "Classy Padded Chair",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/6214879/pexels-photo-6214879.jpeg"
    },
    {
        "id": 7,
        "title": "Comfortable Sofa",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    }, {

        "id": 8,
        "title": "Elegant Side Table",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/7358158/pexels-photo-7358158.jpeg"
    }, {

        "id": 9,
        "title": "Classy Padded Chair",
        "price": "$ 80.99",
        "imageUrl": "https://images.pexels.com/photos/6214879/pexels-photo-6214879.jpeg"
    }
];


const allBlogs = [
    {
        "id": 1,
        "title": "The Art of Cozy: Elevate Your Home with Fall Decor",
        "description": "As the crisp autumn breeze sweeps in, it's time to transform your living space into a cozy haven. In our latest blog post, explore the art of fall decor with FurniLux. From warm color palettes to snug textiles, discover simple...",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "read": "Read More"
    },
    {
        "id": 2,
        "title": "The Art of Cozy: Elevate Your Home with Fall Decor",
        "description": "As the crisp autumn breeze sweeps in, it's time to transform your living space into a cozy haven. In our latest blog post, explore the art of fall decor with FurniLux. From warm color palettes to snug textiles, discover simple...",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "read": "Read More"
    },
    {
        "id": 3,
        "title": "The Art of Cozy: Elevate Your Home with Fall Decor",
        "description": "As the crisp autumn breeze sweeps in, it's time to transform your living space into a cozy haven. In our latest blog post, explore the art of fall decor with FurniLux. From warm color palettes to snug textiles, discover simple...",
        "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "read": "Read More"
    },
];


function App() {
    return (
        <main>
            <header>
                {/* Desktop-Header-Section-Start */}
                <div className="long-bar">
                    <p>Enjoy 30% Off - Shop Now and Save Big!</p>
                </div>
                <nav className="navbar navbar-expand-lg bg-light d-none d-xxl-block d-xl-block d-lg-block">
                    <div className="container">
                        <div className="col-xl-2 col-lg-2">
                            <a className="navbar-brand" href="/">
                                <img src={logo} className="img-fluid" alt="desktop-logo"/>
                            </a>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="navbar-nav justify-content-center">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                <a className="nav-link" href="/">Categories</a>
                                <a className="nav-link" href="/">About Us</a>
                                <a className="nav-link" href="/">Pages</a>
                                <a className="nav-link" href="/">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/">Login</a>
                                <a className="nav-link" href="/">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Desktop-Header-Section-End */}

                {/* Mobile-Header-Section-Start */}
                <nav className="navbar bg-light d-xxl-none d-xl-none d-lg-none mobile-header">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={logo} className="img-fluid" alt="mobile-logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                <a className="nav-link" href="/">Categories</a>
                                <a className="nav-link" href="/">About Us</a>
                                <a className="nav-link" href="/">Pages</a>
                                <a className="nav-link" href="/">Contact Us</a>
                                <a className="nav-link" href="/">Login</a>
                                <a className="nav-link" href="/">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Mobile-Header-Section-End */}
            </header>

            {/* First-Fold-Section-Start */}

            {firstFoldTopData.map(firstSecTopData =>
            <section className="container-fluid first-fold-section" style={{
                backgroundImage: `url(${firstSecTopData.imageUrl})`,
                backgroundColor: "#f7f7f7",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} key={firstSecTopData.id}>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="top-banner-sec">
                            <h1>{firstSecTopData.title}</h1>
                            <p>{firstSecTopData.description}</p>
                            <div className="btn-box">
                                <a href="/" className="light-btn">
                                    <span>Shop Now</span>
                                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_11)">
                                            <path
                                                d="M12.7542 4.46883L8.58929 0.219436C8.30252 -0.0731452 7.83824 -0.0731452 7.56513 0.219436C7.27836 0.512017 7.27836 0.985719 7.56513 1.26437L10.5011 4.25984H0.72374C0.327731 4.25984 0 4.59422 0 4.99826C0 5.4023 0.327731 5.73668 0.72374 5.73668H10.4874L7.56513 8.73215C7.27836 9.02473 7.27836 9.49843 7.56513 9.77708C7.70168 9.91641 7.89286 10 8.08403 10C8.27521 10 8.45273 9.93034 8.60294 9.77708L12.7815 5.51376C12.9181 5.37443 13 5.17938 13 4.98433C12.9727 4.8032 12.8908 4.60815 12.7542 4.46883Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_11">
                                                <rect width="13" height="10" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="bottom-banner-sec">
                            {firstFoldBottomData.map(firstSecBottomData =>
                                <a href="/" key={firstSecBottomData.id}>
                                    <div className="single-element">
                                        <img src={firstSecBottomData.imageUrl} className="img-fluid" alt="category-image"/>
                                        <p>{firstSecBottomData.title}</p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            )}

            {/* First-Fold--Section-End */}


            {/* Second-Fold-Section-Start */}
            <section className="second-fold-section">
                <div className="container">
                    <div className="row row-gap-24">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="sec-title">Elevate Your Living Room</h1>
                        </div>

                        {livingRoomFurniture.map(singleFurniture =>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" key={singleFurniture.id}>
                                <a href="/">
                                    <div className="single-furniture">
                                        <div className="furniture-image">
                                            <img src={singleFurniture.imageUrl} className="img-fluid"
                                                 alt="furniture-image"/>
                                        </div>
                                        <div className="furniture-detail">
                                            <div className="colors">
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#A57749"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#719473"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#702F2A"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#33546C"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="name">
                                                <p>{singleFurniture.title}</p>
                                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_9_16)">
                                                        <path
                                                            d="M12 15.9999C12 15.6044 11.8827 15.2177 11.6629 14.8888C11.4431 14.5599 11.1308 14.3036 10.7653 14.1522C10.3998 14.0009 9.99771 13.9613 9.60975 14.0384C9.22179 14.1156 8.86544 14.3061 8.58574 14.5858C8.30605 14.8655 8.11558 15.2219 8.03842 15.6099C7.96126 15.9978 8.00088 16.4 8.15226 16.7654C8.30365 17.1309 8.56 17.4432 8.8889 17.663C9.2178 17.8827 9.60448 18 10 18C10.5303 17.9994 11.0387 17.7885 11.4136 17.4135C11.7886 17.0386 11.9994 16.5302 12 15.9999ZM8.79014 15.9999C8.79016 15.7606 8.86113 15.5267 8.99409 15.3278C9.12705 15.1288 9.31601 14.9737 9.5371 14.8822C9.75818 14.7906 10.0014 14.7667 10.2361 14.8134C10.4708 14.8601 10.6864 14.9753 10.8556 15.1445C11.0248 15.3137 11.14 15.5293 11.1867 15.764C11.2334 15.9987 11.2094 16.242 11.1178 16.463C11.0263 16.6841 10.8712 16.8731 10.6722 17.006C10.4733 17.1389 10.2393 17.2099 10 17.2099C9.67924 17.2096 9.37167 17.082 9.14482 16.8551C8.91798 16.6283 8.79048 16.3207 8.79014 15.9999Z"
                                                            fill="black"/>
                                                        <path
                                                            d="M22 15.9999C22 15.6043 21.8827 15.2176 21.6629 14.8888C21.4431 14.5599 21.1307 14.3036 20.7653 14.1522C20.3998 14.0008 19.9977 13.9613 19.6097 14.0384C19.2218 14.1156 18.8654 14.3061 18.5857 14.5858C18.306 14.8655 18.1156 15.2219 18.0384 15.6099C17.9613 15.9978 18.0009 16.4 18.1523 16.7654C18.3036 17.1308 18.56 17.4432 18.8889 17.6629C19.2178 17.8827 19.6044 18 20 18C20.5303 17.9994 21.0387 17.7885 21.4136 17.4135C21.7886 17.0385 21.9994 16.5301 22 15.9999ZM18.7901 15.9999C18.7901 15.7606 18.8611 15.5267 18.9941 15.3277C19.127 15.1288 19.316 14.9737 19.5371 14.8822C19.7582 14.7906 20.0014 14.7667 20.2361 14.8134C20.4708 14.8601 20.6864 14.9753 20.8556 15.1445C21.0248 15.3137 21.14 15.5293 21.1866 15.764C21.2333 15.9987 21.2094 16.242 21.1178 16.463C21.0262 16.6841 20.8711 16.8731 20.6722 17.006C20.4732 17.1389 20.2393 17.2099 20 17.2099C19.6792 17.2095 19.3717 17.0819 19.1448 16.8551C18.918 16.6282 18.7904 16.3207 18.7901 15.9999Z"
                                                            fill="black"/>
                                                        <path
                                                            d="M23.5678 1.95398H5.66058L5.60804 1.66332C5.52335 1.20139 5.24251 0.779839 4.81622 0.474803C4.38994 0.169767 3.84633 0.00135955 3.28358 0H0V0.71779H3.28358C3.63943 0.718356 3.9833 0.824619 4.25301 1.01737C4.52271 1.21012 4.70046 1.47663 4.7541 1.76871L6.6464 11.6902C6.71457 12.0563 6.93886 12.39 7.27844 12.6304C7.61801 12.8708 8.05029 13.002 8.49654 13H23.1015V12.2822H8.49654C7.99739 12.2822 7.57844 11.9998 7.50039 11.5904L7.13519 9.69017H19.6055C20.0956 9.68826 20.5728 9.55995 20.9712 9.32299C21.3696 9.08602 21.6694 8.75212 21.8292 8.36748C21.8312 8.36273 21.8331 8.35376 21.8348 8.34894L23.9818 2.4046C24.0011 2.35196 24.0051 2.29625 23.9934 2.24208C23.9818 2.1879 23.9547 2.13682 23.9145 2.09304C23.874 2.04887 23.8214 2.01326 23.7612 1.9891C23.7009 1.96495 23.6347 1.95291 23.5678 1.95398ZM21.0095 8.146C20.907 8.38731 20.717 8.59632 20.4656 8.7443C20.2141 8.89227 19.9137 8.97195 19.6055 8.97238H6.99816L5.79746 2.67177H22.9867L21.0095 8.146Z"
                                                            fill="black"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9_16">
                                                            <rect width="24" height="18" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="price">
                                                <p>{singleFurniture.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            {/* Second-Fold--Section-End */}


            {/* Third-Fold-Section-Start */}
            <section className="third-fold-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div id="firstCarouselIndicators" className="carousel slide slider-height"
                                             data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#firstCarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#firstCarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-content">
                                                                <h1>Luxurious Sofa</h1>
                                                                <p>Experience extraordinary comfort with our luxurious sofa. Its elegant design and plush comfort make it the perfect addition to your home.</p>
                                                                <div className="slider-detail">
                                                                    <div className="price">
                                                                        <p>$ 80.99</p>
                                                                    </div>
                                                                    <div className="colors">
                                                                        <div className="single-color">
                                                                            <svg width="16" height="16"
                                                                                 viewBox="0 0 16 16" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_8_2)">
                                                                                    <path
                                                                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                                        fill="#A57749"/>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_8_2">
                                                                                        <rect width="16" height="16"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="single-color">
                                                                            <svg width="16" height="16"
                                                                                 viewBox="0 0 16 16" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_8_2)">
                                                                                    <path
                                                                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                                        fill="#719473"/>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_8_2">
                                                                                        <rect width="16" height="16"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="single-color">
                                                                            <svg width="16" height="16"
                                                                                 viewBox="0 0 16 16" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_8_2)">
                                                                                    <path
                                                                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                                        fill="#702F2A"/>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_8_2">
                                                                                        <rect width="16" height="16"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <a href="/"
                                                                           className="dark-btn"><span>Shop Now</span>
                                                                            <svg width="13" height="10"
                                                                                 viewBox="0 0 13 10" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_18_64)">
                                                                                    <mask id="mask0_18_64"
                                                                                          maskUnits="userSpaceOnUse"
                                                                                          x="0" y="0" width="13"
                                                                                          height="10">
                                                                                        <path d="M13 0H0V10H13V0Z"
                                                                                              fill="white"/>
                                                                                    </mask>
                                                                                    <g mask="url(#mask0_18_64)">
                                                                                        <path
                                                                                            d="M12.7542 4.46883L8.58929 0.219436C8.30252 -0.0731453 7.83824 -0.0731453 7.56513 0.219436C7.27836 0.512017 7.27836 0.985719 7.56513 1.26437L10.5011 4.25984H0.72374C0.327731 4.25984 0 4.59422 0 4.99826C0 5.4023 0.327731 5.73668 0.72374 5.73668H10.4874L7.56513 8.73215C7.27836 9.02473 7.27836 9.49843 7.56513 9.77708C7.70168 9.91641 7.89286 10 8.08403 10C8.27521 10 8.45273 9.93034 8.60294 9.77708L12.7815 5.51376C12.9181 5.37443 13 5.17938 13 4.98433C12.9727 4.8032 12.8908 4.60815 12.7542 4.46883Z"
                                                                                            fill="white"/>
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_18_64">
                                                                                        <rect width="13" height="10"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-image">
                                                                <img src={brownSofa} className="img-fluid"
                                                                     alt="slider-image"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-content">
                                                                <h1>Luxurious Bed</h1>
                                                                <p>Discover unparalleled comfort with our Luxurious bed.
                                                                    Elegant design, plush comfort</p>
                                                                <div className="slider-detail">
                                                                    <div className="price">
                                                                        <p>$ 80.99</p>
                                                                    </div>
                                                                    <div className="colors">
                                                                        <div className="single-color">
                                                                            <svg width="16" height="16"
                                                                                 viewBox="0 0 16 16" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_8_2)">
                                                                                    <path
                                                                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                                        fill="#A57749"/>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_8_2">
                                                                                        <rect width="16" height="16"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="single-color">
                                                                            <svg width="16" height="16"
                                                                                 viewBox="0 0 16 16" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_8_2)">
                                                                                    <path
                                                                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                                        fill="#719473"/>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_8_2">
                                                                                        <rect width="16" height="16"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="single-color">
                                                                            <svg width="16" height="16"
                                                                                 viewBox="0 0 16 16" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_8_2)">
                                                                                    <path
                                                                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                                        fill="#702F2A"/>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_8_2">
                                                                                        <rect width="16" height="16"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <a href="/"
                                                                           className="dark-btn"><span>Shop Now</span>
                                                                            <svg width="13" height="10"
                                                                                 viewBox="0 0 13 10" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_18_64)">
                                                                                    <mask id="mask0_18_64"
                                                                                          maskUnits="userSpaceOnUse"
                                                                                          x="0" y="0" width="13"
                                                                                          height="10">
                                                                                        <path d="M13 0H0V10H13V0Z"
                                                                                              fill="white"/>
                                                                                    </mask>
                                                                                    <g mask="url(#mask0_18_64)">
                                                                                        <path
                                                                                            d="M12.7542 4.46883L8.58929 0.219436C8.30252 -0.0731453 7.83824 -0.0731453 7.56513 0.219436C7.27836 0.512017 7.27836 0.985719 7.56513 1.26437L10.5011 4.25984H0.72374C0.327731 4.25984 0 4.59422 0 4.99826C0 5.4023 0.327731 5.73668 0.72374 5.73668H10.4874L7.56513 8.73215C7.27836 9.02473 7.27836 9.49843 7.56513 9.77708C7.70168 9.91641 7.89286 10 8.08403 10C8.27521 10 8.45273 9.93034 8.60294 9.77708L12.7815 5.51376C12.9181 5.37443 13 5.17938 13 4.98433C12.9727 4.8032 12.8908 4.60815 12.7542 4.46883Z"
                                                                                            fill="white"/>
                                                                                    </g>
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_18_64">
                                                                                        <rect width="13" height="10"
                                                                                              fill="white"/>
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-image">
                                                                <img src={whiteBed} className="img-fluid"
                                                                     alt="slider-image"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button"
                                                    data-bs-target="#firstCarouselIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button"
                                                    data-bs-target="#firstCarouselIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Third-Fold--Section-End */}


            {/* Fourth-Fold-Section-Start */}
            <section className="second-fold-section">
                <div className="container">
                    <div className="row row-gap-24">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="sec-title">All Products</h1>
                        </div>

                        {allFurniture.map(singleFurniture =>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" key={singleFurniture.id}>
                                <a href="/">
                                    <div className="single-furniture">
                                        <div className="furniture-image">
                                            <img src={singleFurniture.imageUrl} className="img-fluid"
                                                 alt="furniture-image"/>
                                        </div>
                                        <div className="furniture-detail">
                                            <div className="colors">
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#A57749"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#719473"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#702F2A"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="single-color">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_8_2)">
                                                            <path
                                                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                                                                fill="#33546C"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_8_2">
                                                                <rect width="16" height="16" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="name">
                                                <p>{singleFurniture.title}</p>
                                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_9_16)">
                                                        <path
                                                            d="M12 15.9999C12 15.6044 11.8827 15.2177 11.6629 14.8888C11.4431 14.5599 11.1308 14.3036 10.7653 14.1522C10.3998 14.0009 9.99771 13.9613 9.60975 14.0384C9.22179 14.1156 8.86544 14.3061 8.58574 14.5858C8.30605 14.8655 8.11558 15.2219 8.03842 15.6099C7.96126 15.9978 8.00088 16.4 8.15226 16.7654C8.30365 17.1309 8.56 17.4432 8.8889 17.663C9.2178 17.8827 9.60448 18 10 18C10.5303 17.9994 11.0387 17.7885 11.4136 17.4135C11.7886 17.0386 11.9994 16.5302 12 15.9999ZM8.79014 15.9999C8.79016 15.7606 8.86113 15.5267 8.99409 15.3278C9.12705 15.1288 9.31601 14.9737 9.5371 14.8822C9.75818 14.7906 10.0014 14.7667 10.2361 14.8134C10.4708 14.8601 10.6864 14.9753 10.8556 15.1445C11.0248 15.3137 11.14 15.5293 11.1867 15.764C11.2334 15.9987 11.2094 16.242 11.1178 16.463C11.0263 16.6841 10.8712 16.8731 10.6722 17.006C10.4733 17.1389 10.2393 17.2099 10 17.2099C9.67924 17.2096 9.37167 17.082 9.14482 16.8551C8.91798 16.6283 8.79048 16.3207 8.79014 15.9999Z"
                                                            fill="black"/>
                                                        <path
                                                            d="M22 15.9999C22 15.6043 21.8827 15.2176 21.6629 14.8888C21.4431 14.5599 21.1307 14.3036 20.7653 14.1522C20.3998 14.0008 19.9977 13.9613 19.6097 14.0384C19.2218 14.1156 18.8654 14.3061 18.5857 14.5858C18.306 14.8655 18.1156 15.2219 18.0384 15.6099C17.9613 15.9978 18.0009 16.4 18.1523 16.7654C18.3036 17.1308 18.56 17.4432 18.8889 17.6629C19.2178 17.8827 19.6044 18 20 18C20.5303 17.9994 21.0387 17.7885 21.4136 17.4135C21.7886 17.0385 21.9994 16.5301 22 15.9999ZM18.7901 15.9999C18.7901 15.7606 18.8611 15.5267 18.9941 15.3277C19.127 15.1288 19.316 14.9737 19.5371 14.8822C19.7582 14.7906 20.0014 14.7667 20.2361 14.8134C20.4708 14.8601 20.6864 14.9753 20.8556 15.1445C21.0248 15.3137 21.14 15.5293 21.1866 15.764C21.2333 15.9987 21.2094 16.242 21.1178 16.463C21.0262 16.6841 20.8711 16.8731 20.6722 17.006C20.4732 17.1389 20.2393 17.2099 20 17.2099C19.6792 17.2095 19.3717 17.0819 19.1448 16.8551C18.918 16.6282 18.7904 16.3207 18.7901 15.9999Z"
                                                            fill="black"/>
                                                        <path
                                                            d="M23.5678 1.95398H5.66058L5.60804 1.66332C5.52335 1.20139 5.24251 0.779839 4.81622 0.474803C4.38994 0.169767 3.84633 0.00135955 3.28358 0H0V0.71779H3.28358C3.63943 0.718356 3.9833 0.824619 4.25301 1.01737C4.52271 1.21012 4.70046 1.47663 4.7541 1.76871L6.6464 11.6902C6.71457 12.0563 6.93886 12.39 7.27844 12.6304C7.61801 12.8708 8.05029 13.002 8.49654 13H23.1015V12.2822H8.49654C7.99739 12.2822 7.57844 11.9998 7.50039 11.5904L7.13519 9.69017H19.6055C20.0956 9.68826 20.5728 9.55995 20.9712 9.32299C21.3696 9.08602 21.6694 8.75212 21.8292 8.36748C21.8312 8.36273 21.8331 8.35376 21.8348 8.34894L23.9818 2.4046C24.0011 2.35196 24.0051 2.29625 23.9934 2.24208C23.9818 2.1879 23.9547 2.13682 23.9145 2.09304C23.874 2.04887 23.8214 2.01326 23.7612 1.9891C23.7009 1.96495 23.6347 1.95291 23.5678 1.95398ZM21.0095 8.146C20.907 8.38731 20.717 8.59632 20.4656 8.7443C20.2141 8.89227 19.9137 8.97195 19.6055 8.97238H6.99816L5.79746 2.67177H22.9867L21.0095 8.146Z"
                                                            fill="black"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9_16">
                                                            <rect width="24" height="18" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="price">
                                                <p>{singleFurniture.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            {/* Fourth-Fold--Section-End */}


            {/* Fifth-Fold-Section-Start */}
            <section className="third-fold-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div id="secondCarouselIndicators" className="carousel slide slider-height"
                                             data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#secondCarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#secondCarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-content">
                                                                <div className="slider-detail">
                                                                    <p className="comments">"Incredibly happy with my
                                                                        new chair! Stylish, comfortable, and exceeded my
                                                                        expectations. Seamless purchase and prompt
                                                                        delivery. Highly recommend!"</p>
                                                                    <p className="writer">Marie Elisa</p>
                                                                </div>
                                                                <div className="review">
                                                                    <div className="review-image">
                                                                        <img src={chair} className="img-fluid"
                                                                             alt="review-image"/>
                                                                    </div>
                                                                    <div className="review-detail">
                                                                        <p>Stylish Chair</p>
                                                                        <p>$89.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-image">
                                                                <img src={chair} className="img-fluid"
                                                                     alt="slider-image"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-content">
                                                                <div className="slider-detail">
                                                                    <p className="comments">"Incredibly pleased with my new table and chair! They are stylish, comfortable, and exceeded my expectations. The purchase was seamless, and the delivery was prompt. I highly recommend!"</p>
                                                                    <p className="writer">Frank  Williamson</p>
                                                                </div>
                                                                <div className="review">
                                                                    <div className="review-image">
                                                                        <img src={tableWithChair} className="img-fluid" alt="review-image"/>
                                                                    </div>
                                                                    <div className="review-detail">
                                                                        <p>Table With Chair</p>
                                                                        <p>$ 95.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="single-slider-image">
                                                                <img src={tableWithChair} className="img-fluid"
                                                                     alt="slider-image"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#secondCarouselIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#secondCarouselIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fifth-Fold--Section-End */}


            {/* Sixth-Fold-Section-Start */}
            <section className="sixth-fold-section">
                <div className="container">
                    <div className="row row-gap-24">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="sec-title">
                                <h2 className="mb-4">Blogs & Insights</h2>
                                <p>Explore Our Blog for DesignInspiration and Tips</p>
                            </div>
                        </div>

                        {allBlogs.map(singleBlog =>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" key={singleBlog.id}>
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <img src={singleBlog.imageUrl} className="img-fluid" alt="blog-image"/>
                                    </div>
                                    <div className="blog-detail">
                                        <a href="/">
                                            <div className="title">
                                                <p>{singleBlog.title}</p>
                                            </div>
                                            <div className="description">
                                                <p>{singleBlog.description}</p>
                                            </div>
                                            <div className="read-me">
                                                <p>{singleBlog.read}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            {/* Sixth-Fold--Section-End */}

            {/* Footer--Section-Start */}
            <footer className="footer-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="footer-column">
                                <img src={logo} className="img-fluid" alt="footer-logo"/>
                                <p>Designing Dreams, Crafting Comfort</p>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13_20)">
                                            <path
                                                d="M6.12943 4.46755C6.73171 3.77232 6.66199 2.71368 5.97381 2.10522L4.05984 0.414619C3.72635 0.119585 3.2989 -0.0274226 2.85932 0.00422651C2.41671 0.0328126 2.0135 0.233926 1.72347 0.571845L0.771535 1.66929C0.171273 2.36144 -0.097542 3.27615 0.0318079 4.18067C0.270295 5.83756 1.13431 8.35412 3.91541 10.942L5.06642 11.9608C7.98688 14.4385 10.592 14.9796 12.2655 15H12.3019C13.1972 15 14.0451 14.611 14.6383 13.926L15.5902 12.8286C16.1925 12.1333 16.1228 11.0747 15.4346 10.4662L13.5257 8.77771C13.1922 8.48267 12.7627 8.33567 12.3201 8.36731C11.8775 8.39896 11.4712 8.60212 11.1822 8.94207L10.6365 9.57706C10.4091 9.8435 10.0575 9.95886 9.73912 9.867C7.48561 9.22691 6.1093 7.25863 5.48868 6.14281C5.29971 5.80285 5.34114 5.37714 5.59479 5.08721L6.12943 4.46755ZM5.3503 3.77846L4.80967 4.40324C4.26904 5.02801 4.17607 5.93457 4.57927 6.65837C5.27755 7.91508 6.83986 10.1345 9.45317 10.8768C10.1545 11.0758 10.9255 10.8349 11.4136 10.2622L11.9573 9.62719C12.0664 9.49958 12.219 9.42301 12.3837 9.41076C12.5495 9.40055 12.7102 9.45568 12.8365 9.56491L14.7454 11.2534C15.0041 11.4811 15.0304 11.8803 14.805 12.1396L13.8531 13.237C13.4519 13.6995 12.8749 13.9608 12.2726 13.9527C10.7699 13.9343 8.41226 13.4351 5.73523 11.1636L4.60241 10.1601C2.05381 7.78752 1.2657 5.51592 1.05331 4.02651C0.968426 3.4252 1.14628 2.81371 1.54748 2.35123L2.49942 1.25378C2.60856 1.12821 2.76114 1.05267 2.92586 1.0394C2.93899 1.0394 2.95415 1.03633 2.96729 1.03633C3.11685 1.03633 3.26236 1.09146 3.37554 1.19355L5.28951 2.88415C5.54922 3.11895 5.57566 3.51712 5.3503 3.77846Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13_20">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>+00 123 123 123</p>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13_30)">
                                            <path
                                                d="M14.2857 0H1.71429C0.767854 0 0 0.739059 0 1.65V9.35C0 10.2609 0.767854 11 1.71429 11H14.2857C15.2321 11 16 10.2609 16 9.35V1.65C16 0.739059 15.2321 0 14.2857 0ZM13.8286 1.1L8.31854 4.63584C8.1271 4.75959 7.87639 4.75959 7.68424 4.63584L2.17147 1.1H13.8286ZM14.2857 9.9H1.71429C1.39856 9.9 1.14286 9.65388 1.14286 9.35V1.76L7.04933 5.55016C7.62503 5.92004 8.37504 5.92004 8.95067 5.55016L14.8571 1.76V9.35C14.8571 9.49575 14.7971 9.636 14.69 9.73912C14.5829 9.84224 14.4371 9.9 14.2857 9.9Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13_30">
                                                <rect width="16" height="11" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>furnilux@businss.com</p>
                                </div>
                                <div className="adjust">
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13_34)">
                                            <path
                                                d="M5.99995 16C5.4804 16.0014 4.99156 15.75 4.68543 15.3234C2.93599 12.9149 0 8.51349 0 6.094C0 3.91685 1.1434 1.90511 3.00004 0.816444C4.85666 -0.272148 7.14334 -0.272148 8.99996 0.816444C10.8566 1.90503 12 3.91668 12 6.094C12 8.51349 9.06419 12.9151 7.31457 15.3234C7.00844 15.75 6.51947 16.0014 5.99995 16ZM5.99995 1.05336C4.69156 1.06236 3.43975 1.59834 2.51939 2.5429C1.59895 3.48814 1.08555 4.76578 1.091 6.09466C1.091 7.63061 2.72119 10.7544 5.56366 14.6664C5.66866 14.8021 5.82956 14.8817 6.00002 14.8817C6.17048 14.8817 6.33137 14.8021 6.43638 14.6664C9.27881 10.7546 10.909 7.63059 10.909 6.09466C10.9145 4.76576 10.4011 3.48814 9.48065 2.5429C8.56021 1.59834 7.30832 1.06235 5.99995 1.05336ZM5.99995 8.80376C5.132 8.80376 4.29952 8.45335 3.68586 7.83012C3.07223 7.20688 2.72723 6.36134 2.72723 5.47977C2.72723 4.5982 3.07223 3.75269 3.68586 3.12942C4.29948 2.50618 5.13198 2.15578 5.99995 2.15578C6.86791 2.15578 7.70038 2.50618 8.31404 3.12942C8.92766 3.75266 9.27266 4.5982 9.27266 5.47977C9.27198 6.36132 8.92698 7.20615 8.31336 7.82941C7.69973 8.45266 6.86791 8.80307 5.99995 8.80376ZM5.99995 3.26383C5.11769 3.26383 4.32201 3.80398 3.9845 4.6315C3.64632 5.45972 3.83314 6.41331 4.45699 7.0469C5.08084 7.68053 6.01969 7.87027 6.83514 7.52679C7.6499 7.18401 8.1817 6.37587 8.1817 5.47977C8.1817 4.89185 7.95193 4.32815 7.54284 3.91267C7.13374 3.49718 6.5788 3.26383 5.99995 3.26383Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13_34">
                                                <rect width="12" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>123 Homestd Lane, Suite 456 Civil, United Interiors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12">
                            <div className="footer-column">
                                <p className="column-title">About Us</p>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">About us</a>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">Blog</a>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">Contact us</a>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">Popular question</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12">
                            <div className="footer-column">
                                <p className="column-title">What's Popular</p>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">King Size Beds</a>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">Sofas</a>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">Chairs</a>
                                </div>
                                <div className="adjust">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_60)">
                                            <path
                                                d="M15.8554 0.20588C15.7572 0.094593 15.6232 0.0262873 15.4813 0.00622246C15.3586 -0.0111443 15.2301 0.00757153 15.1137 0.065768C13.8229 0.71136 12.7208 1.09462 11.8077 1.21558C10.9505 1.32089 10.4264 1.36619 10.2358 1.35164C10.1997 1.34886 10.1635 1.34925 10.1277 1.35268L10.1256 1.35239C10.1185 1.35156 10.111 1.35058 10.1031 1.34945C9.94935 1.3277 9.61711 1.25045 9.10627 1.11763C9.08274 1.11151 9.05918 1.10683 9.03565 1.1035C8.73561 1.06105 8.44332 1.24071 8.36238 1.52976C8.27509 1.8415 8.46657 2.1624 8.79013 2.24651C9.33808 2.38898 9.72712 2.47653 9.95722 2.50906C10.0034 2.51562 10.0433 2.51993 10.0767 2.52203C10.1244 2.52503 10.1702 2.52477 10.2139 2.52124L10.2118 2.52095C10.5134 2.53021 11.0985 2.48145 11.9671 2.37469L11.9729 2.37394C12.0145 2.36846 12.0585 2.35905 12.1006 2.35268C10.0909 4.1485 6.11503 8.03302 0.168691 14.0108C-0.0631652 14.244 -0.0550125 14.614 0.186946 14.8374C0.281464 14.9248 0.397711 14.9767 0.518088 14.9938C0.705795 15.0203 0.903569 14.9619 1.04484 14.8199C7.99745 7.83046 12.2129 3.73857 13.6923 2.5431C13.3891 3.55816 13.3595 4.61112 13.6132 5.70331C13.6697 5.94647 13.8758 6.12006 14.1173 6.15423C14.1887 6.16434 14.2632 6.16226 14.3378 6.14617C14.6648 6.07568 14.8706 5.76306 14.7974 5.44799C14.4268 3.85204 14.7876 2.3473 15.8799 0.93378C16.0488 0.715287 16.0386 0.413376 15.8554 0.20588Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_60">
                                                <rect width="16" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="/">Decorative Lamps</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="footer-column">
                                <p className="column-title">Get 15% off your first order!</p>
                                <p>Subscribe our news letter and get discount for your first order! also recieve updates
                                    and more</p>
                                <div className="subscription-box">
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_13_30)">
                                            <path
                                                d="M14.2857 0H1.71429C0.767854 0 0 0.739059 0 1.65V9.35C0 10.2609 0.767854 11 1.71429 11H14.2857C15.2321 11 16 10.2609 16 9.35V1.65C16 0.739059 15.2321 0 14.2857 0ZM13.8286 1.1L8.31854 4.63584C8.1271 4.75959 7.87639 4.75959 7.68424 4.63584L2.17147 1.1H13.8286ZM14.2857 9.9H1.71429C1.39856 9.9 1.14286 9.65388 1.14286 9.35V1.76L7.04933 5.55016C7.62503 5.92004 8.37504 5.92004 8.95067 5.55016L14.8571 1.76V9.35C14.8571 9.49575 14.7971 9.636 14.69 9.73912C14.5829 9.84224 14.4371 9.9 14.2857 9.9Z"
                                                fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_13_30">
                                                <rect width="16" height="11" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <form action="">
                                        <input type="search" placeholder="Email Address"/>
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="footer-bottom-sec">
                                <div className="social-media">
                                    <div className="single-social">
                                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_15_38)">
                                                <path
                                                    d="M8.07558 3.80952H9.61379C9.8256 3.80952 9.99834 3.63839 9.99834 3.42857V0.380952C9.99834 0.171124 9.82559 0 9.61379 0H7.30648C4.97437 0 3.07641 1.88021 3.07641 4.19048V6.12571H0.384552C0.172741 6.12571 0 6.29685 0 6.50667V9.52381C0 9.73364 0.172748 9.90476 0.384552 9.90476H2.80896V15.619C2.80896 15.8289 2.98171 16 3.19351 16H6.40432C6.61613 16 6.78887 15.8289 6.78887 15.619V9.90476H8.81162C8.98662 9.90476 9.14058 9.78869 9.1849 9.61905L9.98706 6.57143C10.0179 6.45685 9.99306 6.33556 9.91946 6.24181C9.8466 6.1488 9.73469 6.093 9.61603 6.093H6.92417V4.95014C6.92417 4.31993 7.44166 3.80729 8.07782 3.80729L8.07558 3.80952ZM6.53738 6.85714H9.1158L8.51418 9.14286H6.403C6.19119 9.14286 6.01845 9.31399 6.01845 9.52381V15.2381H3.57673V9.52381C3.57673 9.31398 3.40399 9.14286 3.19218 9.14286H0.767776V6.88762H3.45964C3.67145 6.88762 3.84419 6.71649 3.84419 6.50667V4.19048C3.84419 2.30059 5.39591 0.761905 7.30515 0.761905H9.22791V3.04762H8.07426C7.01449 3.04762 6.1515 3.90253 6.1515 4.95238V6.47619C6.1515 6.68602 6.32425 6.85714 6.53605 6.85714H6.53738Z"
                                                    fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_15_38">
                                                    <rect width="10" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="single-social">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.0475 0H3.95275C2.90476 0.00112499 1.90002 0.417935 1.15898 1.15898C0.417935 1.90002 0.00112499 2.90476 0 3.95275V12.0473C0.00112499 13.0952 0.417935 14.1 1.15898 14.841C1.90002 15.5821 2.90476 15.9989 3.95275 16H12.0475C13.0955 15.9989 14.1002 15.5821 14.8412 14.841C15.5822 14.1 15.9989 13.0952 16 12.0473V3.95275C15.9989 2.90478 15.5822 1.90004 14.8412 1.15899C14.1002 0.417943 13.0955 0.0011251 12.0475 0ZM14.4813 12.0473C14.4805 12.6925 14.2239 13.3112 13.7676 13.7675C13.3114 14.2239 12.6928 14.4806 12.0475 14.4815H3.95275C3.30741 14.4807 2.68874 14.224 2.23244 13.7676C1.77614 13.3113 1.51948 12.6926 1.51875 12.0473V3.95275C1.51948 3.30741 1.77614 2.68871 2.23244 2.23237C2.68874 1.77602 3.30741 1.51929 3.95275 1.5185H12.0475C12.6928 1.51936 13.3114 1.77612 13.7676 2.23246C14.2239 2.68879 14.4805 3.30746 14.4813 3.95275V12.0473Z"
                                                fill="black"/>
                                            <path
                                                d="M7.99974 4C7.20863 4.00005 6.43529 4.23469 5.77753 4.67425C5.11977 5.11381 4.60712 5.73854 4.30441 6.46945C4.0017 7.20036 3.92252 8.00461 4.07689 8.78052C4.23126 9.55643 4.61225 10.2691 5.17167 10.8285C5.73109 11.3879 6.44382 11.7688 7.21974 11.9232C7.99565 12.0775 8.79991 11.9982 9.5308 11.6955C10.2617 11.3927 10.8864 10.88 11.3259 10.2223C11.7654 9.56446 12 8.79111 12 8C11.9988 6.93945 11.577 5.92268 10.827 5.17278C10.0771 4.42289 9.06029 4.00111 7.99974 4ZM7.99974 10.4058C7.52393 10.4057 7.05883 10.2646 6.66323 10.0002C6.26764 9.73582 5.95933 9.36007 5.77728 8.92047C5.59523 8.48087 5.54763 7.99715 5.64049 7.5305C5.73334 7.06384 5.96249 6.6352 6.29895 6.29877C6.63542 5.96234 7.06409 5.73324 7.53075 5.64043C7.99742 5.54763 8.48113 5.59528 8.92071 5.77738C9.36029 5.95947 9.73601 6.26783 10.0003 6.66345C10.2647 7.05907 10.4058 7.52419 10.4058 8C10.4051 8.6379 10.1514 9.2495 9.70036 9.70054C9.24927 10.1516 8.63764 10.4052 7.99974 10.4058Z"
                                                fill="black"/>
                                            <path
                                                d="M12.0002 3C11.8025 2.99995 11.6091 3.05856 11.4446 3.16841C11.2801 3.27826 11.1519 3.43442 11.0762 3.61715C11.0005 3.79987 10.9806 4.00094 11.0192 4.19494C11.0577 4.38894 11.153 4.56714 11.2928 4.70702C11.4326 4.8469 11.6108 4.94216 11.8048 4.98077C11.9988 5.01937 12.1999 4.99958 12.3826 4.9239C12.5654 4.84822 12.7216 4.72005 12.8315 4.5556C12.9413 4.39114 13 4.19779 13 4C13 3.73483 12.8947 3.48051 12.7072 3.29298C12.5197 3.10545 12.2654 3.00007 12.0002 3Z"
                                                fill="black"/>
                                        </svg>
                                    </div>
                                    <div className="single-social">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_15_51)">
                                                <path
                                                    d="M14.75 0H1.25C0.559375 0 0 0.559375 0 1.25V14.75C0 15.4406 0.559375 16 1.25 16H14.75C15.4406 16 16 15.4406 16 14.75V1.25C16 0.559375 15.4406 0 14.75 0ZM5.7625 11.3469H4.20312V6.35625H5.7625V11.3469ZM4.94063 5.73125H4.92812C4.3625 5.73125 3.99688 5.35 3.99688 4.86563C3.99688 4.37188 4.375 4 4.95 4C5.525 4 5.87812 4.37188 5.89062 4.86563C5.89375 5.34688 5.52813 5.73125 4.94063 5.73125ZM12 11.3469H10.2312V8.76562C10.2312 8.09062 9.95625 7.62813 9.34688 7.62813C8.88125 7.62813 8.62188 7.94063 8.50313 8.24063C8.45938 8.34688 8.46562 8.49687 8.46562 8.65V11.3469H6.7125C6.7125 11.3469 6.73438 6.77187 6.7125 6.35625H8.46562V7.14062C8.56875 6.79688 9.12813 6.30937 10.0219 6.30937C11.1313 6.30937 12 7.02812 12 8.57187V11.3469Z"
                                                    fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_15_51">
                                                    <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="single-social">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M7.90081 0C3.51921 0 0 3.54772 0 7.9668C0 11.2468 1.9256 13.9915 4.7144 15.2637C4.7144 13.7697 4.704 13.9622 5.8424 9.1043C5.2168 7.84182 5.7032 5.75742 7.104 5.75742C9.048 5.75742 7.7272 8.63962 7.5024 9.77383C7.3032 10.6443 7.9672 11.3141 8.764 11.3141C10.2912 11.3141 11.2864 9.37217 11.2864 7.09648C11.2864 5.35563 10.092 4.08359 8.03361 4.08359C4.37361 4.08359 3.4456 8.15965 4.7144 9.43906C5.0336 9.92227 4.7144 9.9449 4.7144 10.5773C4.4928 11.2461 2.7224 10.274 2.7224 7.76602C2.7224 5.48952 4.5816 2.81211 8.3656 2.81211C11.3528 2.81211 13.3448 5.02101 13.3448 7.36445C13.3448 10.5106 11.6184 12.7871 9.096 12.7871C8.2328 12.7871 7.436 12.3181 7.1704 11.7824C6.688 13.6588 6.5904 14.6101 5.8424 15.6652C6.5728 15.8661 7.3032 16 8.1 16C12.4816 16 16 12.4523 16 8.03398C15.8016 3.54795 12.2824 0 7.90081 0Z"
                                                  fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="copyright">
                                    <p>© 2024 FurniLux. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer--Section-End */}
        </main>
    );
}

export default App;