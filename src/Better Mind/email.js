import React from 'react';
import { readFileSync } from 'fs';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlStyle,
  MjmlText,
  MjmlAttributes,
  MjmlClass,
  MjmlDivider,
  MjmlWrapper,
  MjmlSpacer,
  MjmlGroup,
  MjmlInclude,
  MjmlHero,
  
} from 'Mjml-react';

const css = readFileSync('/Users/flamejoey/Documents/GitHub/mjml-react-example/src/Breaking News/style.css').toString();

export const generate_Bm = () => {
  return (
    <Mjml>
    <MjmlHead>
    
        <MjmlAttributes>
            <MjmlClass name="fwTitle" padding="8px 0 15px" font-family="helvetica,sans-serif" font-size="32px" font-weight="bold" line-height="36px"  />
            <MjmlClass name="fwText" font-family="helvetica,sans-serif" font-weight="normal" font-size="20px" line-height="px" color="#000000"></MjmlClass>
            <MjmlClass name="fwImage" padding="22px 0 10px 0" align="center" width="600px" fluidOnMobile="TRUE" />
            <MjmlClass name="shareButton" align="right" border="1px solid #CB5A3F" color="#CB5A3F" font-size="18px"  line-height="21px" font-family="Arial,sans-serif" />       
            <MjmlClass name="rmButton" align="right" background-color="#CB5A3F" color="#ffffff" font-size="18px"line-height="21px" />
            <MjmlClass name="CTA_text" font-family="Georgia,'Times New Roman', serif" line-height="32px" font-size="26px"  />
            <MjmlClass name="emailText" align="center" font-family="Arial" font-style="normal" font-size="17px" padding-bottom="14px"/>
            <MjmlClass name="emailButton" align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#cb5a35" text-decoration="underline" />
            <MjmlClass name="bottomText" font-family="Arial, Helvetica Neue, Helvetica, sans-serif" font-size="12px" color="#ffffff" line-height="1.5" />
            <MjmlText padding={0} />
            <MjmlSection padding={0} />
            <MjmlImage padding={0} />
            <MjmlDivider padding={0} />
            <MjmlSpacer padding={0} />
            <MjmlButton padding={0} />
        </MjmlAttributes>
        <MjmlStyle>
        {css}
        </MjmlStyle>
    </MjmlHead>
    <MjmlBody background-color="#ffffff">
  
        <MjmlSection>
            <MjmlColumn>
                <MjmlDivider border-color="#cb5a3f" border-width="10px"/>
                <MjmlImage padding="10px 0" src="https://www.theepochtimes.com/assets/uploads/2022/03/24/BetterMind_Logo_NoTagline.png"  />
                <MjmlText  align="left" font-family="helvetica,sans-serif" font-size="25px" font-weight="bold" color="#cb5a3f">Fames suspendisse in ac lacus mattis id elit ut. Elit massa enim, enim id sed tortor magna et ut. Phasellus congue vestibulum, tristique lectus eget magna. Arcu ultrices elementum ullamcorper tortor. Semper quam scelerisque iaculis volutpat consectetur nec. Volutpat elementum commodo nunc sapien magna sagittis suspendisse volutpat facilisis. Elit a dui elit nisl. Cras luctus tempus id faucibus pellentesque donec adipiscing gravida. Felis eget ultrices est cursus consectetur ut.</MjmlText>
                <MjmlImage padding="22px 0 10px" fluidOnMobile="TRUE" src="https://img.theepochtimes.com/assets/uploads/2022/03/22/IMG_1724-700x420.png"  />
                <MjmlText mjClass='fwTitle'>The Foreign Policy Ramifications of Hunter Biden’s Emails | Truth Over News</MjmlText>
                <MjmlText mjClass='fwText'>When Hunter Biden took his damaged laptop to a computer repair shop in Wilmington, Delaware, in 2019, it was the beginning of a series of fateful events that would culminate...</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 20px 0">
            <MjmlColumn width="20%">
            </MjmlColumn>
            <MjmlColumn width="45%">
                <MjmlButton background-color="#ffffff" mjClass='shareButton'>Share(friends read free)</MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="35%">
                <MjmlButton mjClass='rmButton'>Read more»</MjmlButton>
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection padding="24px 0 4px 0">
            <MjmlHero mode="fixed-height" background-width="600px" background-color="#061031" padding="30px">
                <MjmlText mjClass='CTA_text' color="#ffffff">
                    Dear Reader,
                </MjmlText>
                <MjmlSpacer height="32px"></MjmlSpacer>
                <MjmlText mjClass='CTA_text' color="#ffffff"> 
                    See what President Trump had to say about us:
                </MjmlText>
                <MjmlSpacer height="32px"></MjmlSpacer>
                <MjmlText mjClass='CTA_text' color="#ffffff">[SHAWNA]<br></br>
                    We strive 24/7 to provide honest news for you. Your subscription will help us bring truth to light.
                </MjmlText>
                <MjmlButton padding-top="28px" color="#ffffff" background-color="#418CC8" font-size="20px" font-family="arial, sans-serif" line-height="43px"> 
                    Subscribe & Support Us
                </MjmlButton>
            </MjmlHero>
        </MjmlSection>

        <MjmlSection>
            <MjmlColumn>
                <MjmlImage mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2021/12/15/Torres-trooper-700x420.jpg" />
                <MjmlText mjClass='fwTitle'>Supreme Court Sympathetic to Texas State Trooper Who Wants Job Back After Iraq War Burn-Pit Injury</MjmlText>
                <MjmlText mjClass='fwText'>The Supreme Court seemed sympathetic during oral arguments on March 29 to a former Texas state trooper who claims his former employer violated a federal anti-discrimination law for veterans by...</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 35px 0">
            <MjmlColumn width="20%">
            </MjmlColumn>
            <MjmlColumn width="45%">
                <MjmlButton background-color="#ffffff" mjClass='shareButton'>Share(friends read free)</MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="35%">
                <MjmlButton mjClass='rmButton'>Read more »</MjmlButton>
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
            <MjmlColumn>
                <MjmlImage mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2022/03/27/1.tagreuters.com2022binary_LYNXNPEI2N0PQ-FILEDIMAGE-1200x800-700x420.jpg" />
                <MjmlText mjClass='fwTitle'>‘When Doves Cry’: Federal Reserve Goes to the Hawks</MjmlText>
                <MjmlText mjClass='fwText'>The Federal Reserve is striking a more hawkish tone one week after the Federal Open Market Committee (FOMC) raised interest rates by 25 basis points for the first time since...</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 35px 0">
            <MjmlColumn width="20%">
            </MjmlColumn>
            <MjmlColumn width="45%">
                <MjmlButton background-color="#ffffff" mjClass='shareButton'>Share(friends read free)</MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="35%">
                <MjmlButton mjClass='rmButton'>Read more »</MjmlButton>
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection> 
            <MjmlColumn>
                <MjmlImage mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2022/03/29/Rayne-Barton-Elizebethtown-PA--700x420.jpg" />
                <MjmlText mjClass='fwTitle'>Pennsylvania Trauma Survivor, Unable to Wear Mask, Is Denied Medical Treatment</MjmlText>
                <MjmlText mjClass='fwText'>Rayne Barton vividly remembers a day when she was 5 years old, playing with other little girls near the train tracks in the city of Lancaster, Pennsylvania. Her own house...</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 35px 0">
            <MjmlColumn width="20%">
            </MjmlColumn>
            <MjmlColumn width="45%">
                <MjmlButton background-color="#ffffff" mjClass='shareButton'>Share(friends read free)</MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="35%">
                <MjmlButton mjClass='rmButton'>Read more »</MjmlButton>
            </MjmlColumn>
        </MjmlSection>
        
        <MjmlSection padding="24px 0 4px 0">
            <MjmlWrapper padding="30px" border="1px solid #D44444">
                <MjmlSection>
                    <MjmlColumn>
                    <MjmlImage src="https://www.theepochtimes.com/assets/uploads/2022/04/20/Ancient-tales-of-wisdom.jpeg" />
                    <MjmlText mjClass='CTA_text'>
                        An Oklahoma Democrat running for a U.S. House of Representatives seat announced March 24 she is ending her campaign after getting drunk and berating middle school girls at a sleepover.
                    </MjmlText>
                    <MjmlButton padding-top="28px" font-family="arial,sans-serif" font-size="20px" background-color="#D44444">View Offer</MjmlButton>
                    </MjmlColumn>
                </MjmlSection>
            </MjmlWrapper>
        </MjmlSection>

        <MjmlSection> 
            <MjmlColumn>
                <MjmlImage mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2021/08/25/kate-brown-oregon-700x420.jpg" />
                <MjmlText mjClass='fwTitle'>Full Field in Oregon’s Election Race to Replace Governor</MjmlText>
                <MjmlText mjClass='fwText'>
The campaign to replace Oregon’s Governor Kate Brown is on. The progressive Democrat can’t run again because of term-limits, making the 2022 election the first in more than 20 years in...</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 35px 0">
            <MjmlColumn width="20%">
            </MjmlColumn>
            <MjmlColumn width="45%">
                <MjmlButton background-color="#ffffff" mjClass='shareButton'>Share(friends read free)</MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="35%">
                <MjmlButton mjClass='rmButton'>Read more »</MjmlButton>
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection> 
            <MjmlColumn>
                <MjmlImage mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2022/03/29/Helen-Lillian-Jonbonjovi-1-700x420.jpg" />
                <MjmlText mjClass='fwTitle'>
Woman Sends Granddaughter to Lone Elderly Man’s Table to Ask Him to Join Them, Prompting Double Kindness</MjmlText>
                <MjmlText mjClass='fwText'>An Australian couple were dining with their grandchildren when they noticed a lone elderly man at a nearby table. Something about the sight of the man in his 90s touched...</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 35px 0">
            <MjmlColumn width="20%">
            </MjmlColumn>
            <MjmlColumn width="45%">
                <MjmlButton background-color="#ffffff" mjClass='shareButton'>Share(friends read free)</MjmlButton>
            </MjmlColumn>
            <MjmlColumn width="35%">
                <MjmlButton mjClass='rmButton'>Read more »</MjmlButton>
            </MjmlColumn>
        </MjmlSection>

      <MjmlSection background-color="#ffffff" padding-top="24px" padding-bottom="24px">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#cb5a3f" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding-bottom="20px">
        <MjmlColumn cssClass="desktop-border" width="33%" padding="0 10px 0 10px">
          <MjmlText mjClass="emailText">Share this email with a friend.</MjmlText>
          <MjmlText cssClass="email_button" mjClass="emailButton">Forward</MjmlText>
        </MjmlColumn>
        <MjmlColumn cssClass="desktop-border" width="33%" padding="0 10px 0 10px">  
            <MjmlText cssClass="email_text" mjClass="emailText">Receive This Email From A Friend</MjmlText>
            <MjmlText cssClass="email_button" mjClass="emailButton">Subscribe</MjmlText>
          </MjmlColumn>
        <MjmlColumn  width="33%" padding="0 10px 0 10px">
          <MjmlText cssClass="email_text" mjClass="emailText">Trouble viewing this email?</MjmlText>
          <MjmlText mjClass="emailButton">View in browser</MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff" >
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#cb5a35" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

    
      <MjmlSection padding="20px 0 20px">
        <MjmlColumn>
            <MjmlImage width="316px" src="https://img.theepochtimes.com/assets/uploads/2021/12/15/appstores.png" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding-bottom="20px">
        <MjmlHero mode="fixed-height" background-width="600px" background-color="#cb5a35" padding="30px">
            <MjmlText mjClass="bottomText">The information in this newsletter is not intended to replace a one-on-one relationship with a qualified health care professional and is not intended as medical advice. It is intended as a sharing of knowledge and information from the research and experience of many experts and journalists. The Epoch Times encourages you to make your own health care decisions based upon your research and in partnership with a qualified health care professional.</MjmlText>
            <MjmlSpacer />
            <MjmlText mjClass="bottomText">When sharing an article, giftaccess@TheEpochTimes.com is added to the list of recipients. If your friend is not already a subscriber, we will send them a special link for free access to the article. Manage your email preferences here. When sharing an article, giftaccess@TheEpochTimes.com is added to the list of recipients. If your friend is not already a subscriber, we will send them a special link for free access to the article. Manage your email preferences here.</MjmlText>
            <MjmlSpacer />
            <MjmlSpacer />
            <MjmlSpacer />
            <MjmlText mjClass="bottomText">Copyright © 2022 The Epoch Times. All rights reserved.</MjmlText>
            <MjmlText mjClass='bottomText'>Our mailing address is: The Epoch Times. 5 Penn Plaza, 8th FL, New York, NY 10001</MjmlText>
        </MjmlHero>
      </MjmlSection>
    </MjmlBody>
</Mjml>
  );
};