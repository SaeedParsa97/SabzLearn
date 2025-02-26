import "./AboutUs.css";
import SectionHeader from "./../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />

        <div class="container">
          <div class="row">
            <AboutUsBox 
                title="دوره های اختصاصی"
                desc="با پشتیبانی و کیفیت بالا ارائه میده !"
                icon="far fa-copyright"
            />
            <AboutUsBox 
                title="دوره های اختصاصی"
                desc="با پشتیبانی و کیفیت بالا ارائه میده !"
                icon="fas fa-leaf"
            />
            <AboutUsBox 
                title="دوره های اختصاصی"
                desc="با پشتیبانی و کیفیت بالا ارائه میده !"
                icon="fas fa-gem"
            />
            <AboutUsBox 
                title="دوره های اختصاصی"
                desc="با پشتیبانی و کیفیت بالا ارائه میده !"
                icon="fas fa-crown"
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
