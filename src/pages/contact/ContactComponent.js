import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header themeChange={this.props.themeChange} theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.orange }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="Drop a mail"
                    newTab={true}
                    href="mailto:sureshtr389@gmail.com"
                    theme={theme}
                  />
                </div>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.blue }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <div className="whatsappNum">
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.blue, marginTop: "2px" }}
                  >
                    {phoneSection["subtitle"]}
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/+919738583763"
                  >
                    <span
                      className="iconify"
                      data-icon="simple-icons:whatsapp"
                      style={{
                        color: "green",
                        marginBottom: "15px",
                        marginLeft: "10px",
                      }}
                      data-inline="false"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
export default Contact;