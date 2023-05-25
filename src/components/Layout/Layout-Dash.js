import React from "react";
import Footer from "./Footer";
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';
import HeaderDash from "./Header-Dash";


const LayoutDash = ({ children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
      <HeaderDash />
      <main style={{ minHeight: "73vh" , width:"100%" }}>
      <Toaster/>
      {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutDash;
