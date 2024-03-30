import React from "react";
import Image from "next/image";
import footerStyles from "../css/footer.module.css";
{/* npm install react-icons | https://www.npmjs.com/package/react-icons*/ }
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.group1}>
                <div className={footerStyles.group_child1}>
                    <a id={footerStyles.logo1}><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /><br />
                        Trang thông tin đăng tải hỗ trợ cho các thương hiệu
                        <br />thời trang tại Việt Nam. Mọi thông tin yêu cầu hỗ trợ xin liên hệ
                        <br />về cho bộ phận hỗ trợ nguyentanchieu2002@gmail.com.
                       <br/><br/><b> CÔNG TY TNHH AYDEN TECHCO</b>
                       <br/> cấp ngày 21/03/2024</a>
                   
                </div>
            </div>
            <div className={footerStyles.group2}>
                <p id={footerStyles.text2}>Cho khách hàng <br/></p>
                <div className={footerStyles.information}>
                 <a> Chính sách và quy định <br/><br/></a>
                 <a>  Giới thiệu về AydenBrands <br/><br/></a>
                 <a>  Liên hệ và hỗ trợ thông qua: <br/><br/></a>
                 <a>  Điện thoại:0392155116<br/></a>
                 <a>  Email:nguyentanchieu2002@gmail.com </a>
                 <p id={footerStyles.text1}>Theo dõi tại</p>
                    <div className={footerStyles.GroupIcons}>
                        <a href="https://www.facebook.com/?locale=vi_VN" id={footerStyles.icons}><FaFacebook size={25} color="#c0c0c0" /></a>
                        <a href="https://www.tiktok.com/vi-VN/" id={footerStyles.icons}><FaTiktok size={25} color="#c0c0c0" /></a>
                        <a href="https://www.youtube.com/" id={footerStyles.icons}><FaYoutube size={25} color="#c0c0c0" /></a>
                    </div>
                </div>
                </div>
            </div>
           
    );
}
export default Footer;
