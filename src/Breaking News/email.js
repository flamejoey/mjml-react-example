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
  MjmlInclude
} from 'Mjml-react';

const css = readFileSync('/Users/flamejoey/Documents/GitHub/mjml-react-example/src/Breaking News/style.css').toString();

export const generate_Bn = () => {
  return (
    <Mjml>
    <MjmlHead>
    
        <MjmlAttributes>
            <MjmlClass name="fwTitle" padding="20px 0 5px" font-family="Arial, san-serif" font-size="20px" font-weight="bold" line-height="23px" color="#1C3B62" />
            <MjmlClass name="fwText" font-family="Georgia,Times New Roman, serif" font-size="28px" line-height="32px" color="#000000"></MjmlClass>
            <MjmlClass name="fwImage" align="center" width="600px" fluidOnMobile="TRUE" />
            <MjmlClass name="shareButton" align="right" border="1px solid #B10505" color="#B10505" font-size="18px"  line-height="21px" font-family="Arial,sans-serif" />       
            <MjmlClass name="rmButton" align="right" background-color="#B10505" color="#ffffff" font-size="18px"line-height="21px" />
            <MjmlClass name="emailText" align="center" font-family="Arial" font-style="normal" font-size="17px" padding-bottom="14px"/>
            <MjmlClass name="emailButton" align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#0080c3" text-decoration="underline" />
            <MjmlClass name="bottomText" fon-family="Arial" font-size="12px" color="#33333380" line-height="1.5" />
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
                <MjmlDivider border-color="#3f3f3f" border-width="1px"/>
                <MjmlImage src="https://img.theepochtimes.com/assets/uploads/2022/06/18/NAmb.png"  />
                <MjmlText padding="6px 0 3px" align="center" font-family="Arial, sans-serif" font-size="14px" line-height="1.4" font-weight="700">July 26, 2022</MjmlText>
                <MjmlDivider padding-top="10px" border-color="#3f3f3f" border-width="1px"/>
            </MjmlColumn>
        </MjmlSection>
        


        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle" >CRIME AND INCIDENTS</MjmlText>
                <MjmlText mjClass='fwText'>The Portland Shooting Leaves 1 Dead, 5 Wounded Amid Reports Antifa Is Involved</MjmlText>
                <MjmlImage padding-top="12px" src='https://img.theepochtimes.com/assets/uploads/2022/02/20/Portland_Park_Shooting_2022-2-20-700x420.jpg' />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="25px 0 20px 0">
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
                <MjmlDivider padding-bottom="24px" border-color="#DFE3E8" border-width="1px" />
            </MjmlColumn> 
        </MjmlSection>
        <MjmlSection>
            <MjmlColumn>
                <MjmlImage fluidOnmobile="TRUE" src="https://img.theepochtimes.com/assets/uploads/2021/10/23/Freecell-Solitaire-Cover-1-550x330.jpg"></MjmlImage>
            </MjmlColumn>
        </MjmlSection>
        
         

      <MjmlSection background-color="#ffffff" padding-top="24px" padding-bottom="24px">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
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
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding="20px 0 20px 0">
        <MjmlColumn>
            <MjmlText align="center" padding-bottom="10px" color="#555555" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="14px" line-height="1.2">ADVERTISEMENT:</MjmlText>
            <MjmlImage src="https://img.theepochtimes.com/assets/uploads/2021/10/23/Freecell-Solitaire-Cover-1-550x330.jpg"/>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff" >
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>
    
      <MjmlSection padding="20px 0 20px">
        <MjmlColumn>
            <MjmlImage width="316px" src="https://img.theepochtimes.com/assets/uploads/2021/12/15/appstores.png" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding="24px 0 20px 0">
        <MjmlColumn>
            <MjmlText mjClass="bottomText">Copyright © 2022 The Epoch Times. All rights reserved.</MjmlText>
            <MjmlText mjClass="bottomText">Our mailing address is: The Epoch Times. 229 W. 28 St. Fl. 7 New York, NY 10001</MjmlText>
            <mj-spacer />
            <MjmlText mjClass="bottomText">*When sharing an article, giftaccess@TheEpochTimes.com is added to the list of recipients. If your friend is not already a subscriber, we will send them a special link for free access to the article.</MjmlText>
            <mj-spacer />
            <MjmlText mjClass="bottomText">Our Good Evening newsletter is one of the best ways to receive the most up-to-date information. If you no longer wish to receive these emails, <a href='#' color="D8730E">unsubscribe here.</a></MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
</Mjml>
  );
};