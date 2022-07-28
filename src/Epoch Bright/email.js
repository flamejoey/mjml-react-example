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

const css = readFileSync('/Users/flamejoey/Documents/GitHub/mjml-react-example/src/Good Evening/style.css').toString();

export const generate_Eb = () => {
  return (
    <Mjml>
    <MjmlHead>
    
        <MjmlAttributes>
            <MjmlClass name="fwTitle" padding="24px 0 0" font-family="Georgia, Times New Roman, serif" font-size="17px" font-weight="700" line-height="1.4"/>
            <MjmlClass name="mjButton"  font-family="Arial, sans-serif" color="#D8730E" background-color="#ffffff" font-weight="700" font-size="14px" />
            <MjmlClass name="CTA_Content" font-family="Arial, sans-serif" font-size="16px" color="#000000" line-height="23px"   />
            <MjmlClass name="fwText" padding-bottom="16px" font-family="Georgia,Times New Roman, serif" font-size="24px"></MjmlClass>
            <MjmlClass name="fwImage" align="center" width="480px" />
            <MjmlClass name="fwTag" padding-bottom="4px" align="left" font-family="Arial, sans-serif" color="#A8570B" font-size="14px" font-weight="700" line-height="19px" />
            <MjmlClass name='postImage' fluidOnMobile='TRUE' width="180px" padding-bottom="12px" />
            <MjmlClass name="postTitle" padding="0 20px 4px" font-family="Arial, sans-serif" color="#A8570B" font-size="14px" font-weight="700" line-height="19px" />
            <MjmlClass name="postText" font-family="Georgia, Times New Roman, serif" font-size="20px" color="#333333" line-height="28px"/>            
            <MjmlClass name="emailText" align="center" font-family="Arial" font-style="normal" font-size="17px" padding-bottom="14px"/>
            <MjmlClass name="emailButton" padding-bottom="20px" align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#DB730E" text-decoration="underline" />
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
                <MjmlImage src="https://www.theepochtimes.com/assets/uploads/2022/06/10/evening-brief-2.png"  />
                <MjmlText align="center" font-family="Arial, sans-serif" font-size="14px" line-height="1.4" font-weight="700">July 20, 2022</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn width="30%"> 
            <MjmlImage padding="20px 0 12px" align="left" fluidOnMobile="TRUE" width="180px" src="https://www.theepochtimes.com/assets/uploads/2022/05/02/Frame-41-1.png" />
          </MjmlColumn> 
          <MjmlColumn width="70%">
          </MjmlColumn>
        </MjmlSection>


        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle" >This day in history</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
                <MjmlText align="center" padding-top="20px" font-family="Georgia,Times New Roman, serif" font-size="20px" line-height="1.4">Tell me something</MjmlText>
                <MjmlText align="center" padding="24px 0" font-family="Georgia,Times New Roman, serif" font-size="18px" font-weight="700" line-height="1.2">Happy</MjmlText>
            </MjmlColumn>
        </MjmlSection>

        <MjmlWrapper padding="20px" border="1px solid #D98B43" >
            <MjmlSection> 
                <MjmlColumn>
                    <MjmlText padding-top="20px" mjClass="CTA_Content">Dear Reader, </MjmlText>
                    <MjmlSpacer />
                    <MjmlSpacer />
                    <MjmlText font-family="Arial" font-size="16px">See what Dr. Robert Malone had to say about us:</MjmlText>
                    <MjmlSpacer />
                    <MjmlSpacer />
                </MjmlColumn>
            </MjmlSection>
            <MjmlSection padding="0">    
                <MjmlColumn width="30%" >
                    <MjmlImage padding-bottom="10px" width="180px" src="https://www.theepochtimes.com/assets/uploads/2022/05/06/donald-trump-approval-rating.jpg" />
                </MjmlColumn>
                <MjmlColumn width="70%">
                     <MjmlText align="left" mjClass='CTA_Content'>"I want to thank The Epoch Times. They're doing an incredible job."</MjmlText>
                     <MjmlSpacer />
                     <MjmlSpacer />
                     <MjmlText align="left" mjClass='CTA_Content' font-weight="bold">President Donald J. Trump</MjmlText>
                     <MjmlSpacer />
                </MjmlColumn>
            </MjmlSection>
            <MjmlSection>
                <MjmlColumn>
                    <MjmlText mjClass='CTA_Content'>We strive 24/7 to provide honest news for you. Your subscription will help us bring truth to light.</MjmlText>
                </MjmlColumn>
            </MjmlSection>
            <MjmlSection>
                <MjmlColumn>
                    <MjmlButton padding-top="28px" color="#ffffff" font-size="14px" border-radius="4px" background-color="#D98B43">Subscribe & Support Us</MjmlButton>
                </MjmlColumn>
            </MjmlSection>
        </MjmlWrapper>

        <MjmlSection padding-top="20px">
            <MjmlColumn width="480px">
                <MjmlImage padding="20px 0 16px 0" mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2022/05/04/shutterstock_1504808714-700x420.jpg" href="https://www.theepochtimes.com/median-drug-launch-price-85-times-higher-compared-to-2008_4520343.html?utm_source=&utm_campaign=&utm_medium=&est=[EMAIL_SECURE_LINK]"/>
                <MjmlText mjClass="fwTag"><div className='mobile_hide'>Health News</div></MjmlText>
                <MjmlText mjClass='fwText'>Median Drug Launch Price 85 Times Higher Compared to 2008</MjmlText>						
                <MjmlGroup width="100%">
                  <MjmlColumn>
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
        

        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" padding="0" width="180px" src="https://www.theepochtimes.com/assets/uploads/2022/05/06/donald-trump-approval-rating.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Heath News</div></MjmlText>
                <MjmlText  mjClass="postText"><div className='post_text'>Median Drug Launch Price 85 Times Higher Compared to 2008</div></MjmlText>
                <MjmlGroup width="100%">
                <MjmlColumn width="30%">
                </MjmlColumn>
                <MjmlColumn width="35%">
                  <MjmlButton align='right' mjClass="mjButton">SHARE*</MjmlButton>
                 </MjmlColumn>
                <MjmlColumn width="35%">
                  <MjmlButton align='right' mjClass="mjButton">READ MORE</MjmlButton>
                </MjmlColumn>
                </MjmlGroup>
             </MjmlColumn>
        </MjmlSection>
         
        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle">new billing statement </MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage cssClass='post_Image' mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2020/03/24/Davis-1198494472-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>US</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Likely Next House Admin Panel Chair Delivers J6 Committee Document Preservation Demand</div></MjmlText>
                <MjmlGroup width="100%">
                <MjmlColumn width="30%"></MjmlColumn>
                <MjmlColumn width="35%">
                  <MjmlButton align='right' mjClass="mjButton">SHARE*</MjmlButton>
                 </MjmlColumn>
                <MjmlColumn width="35%">
                  <MjmlButton align='right' mjClass="mjButton">READ MORE</MjmlButton>
                </MjmlColumn>
                </MjmlGroup>
            </MjmlColumn>
          </MjmlSection>
        
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2021/02/09/patrick-fallon-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>AMERICA</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Biden Administration Drops Key COVID-19 Requirement for Air Travel</div></MjmlText>
                <MjmlGroup width="100%">
                <MjmlColumn width="30%"></MjmlColumn>
                <MjmlColumn width="35%">
                  <MjmlButton align='right' mjClass="mjButton">SHARE*</MjmlButton>
                 </MjmlColumn>
                <MjmlColumn width="35%">
                  <MjmlButton align='right' mjClass="mjButton">READ MORE</MjmlButton>
                </MjmlColumn>
                </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
         

      <MjmlSection background-color="#ffffff" padding-top="24px" padding-bottom="24px">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn width="33%">
          <MjmlText mjClass="emailText">Share this email with a friend.</MjmlText>
          <MjmlText mjClass="emailButton">Forward</MjmlText>
        </MjmlColumn>
        <MjmlColumn width="33%">
          <MjmlText mjClass="emailText">Receive This Email From A Friend</MjmlText>
          <MjmlText mjClass="emailButton">Subscribe</MjmlText>
        </MjmlColumn>
        <MjmlColumn width="33%">
          <MjmlText mjClass="emailText">Trouble viewing this email?</MjmlText>
          <MjmlText mjClass="emailButton">View in browser</MjmlText>
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