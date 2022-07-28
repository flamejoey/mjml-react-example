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
} from 'Mjml-react';

const css = readFileSync('/Users/flamejoey/Documents/GitHub/mjml-react-example/src/Morning Brief/style.css').toString();

export const generate_Mb = () => {
  return (
    <Mjml>
    <MjmlHead>
        <MjmlAttributes>
            <MjmlClass name="fwTitle" padding="24px 0 0" font-family="Georgia, Times New Roman, serif" font-size="17px" font-weight="700" line-height="1.4"/>
            <MjmlClass name="mjButton" font-family="Arial, sans-serif" color="#3890CF" background-color="#ffffff" font-weight="700" font-size="14px" />
            <MjmlClass name="CTA_Content" font-family="Arial, sans-serif" font-size="16px" color="#000000" line-height="23px"   />
            <MjmlClass name="fwImage" align="center" width="480px" />
            <MjmlClass name="fwText" align="center" font-family="Georgia, 'Times New Roman', serif" font-size="24px" line-height="1.4" />
            <MjmlClass name="fwTag" padding-bottom="4px" align="center" font-family="Arial, sans-serif" color="#5078B3" font-size="14px" font-weight="700" line-height="19px" />
            <MjmlClass name="postImage" fluidOnMobile='TRUE' width="180px" padding-bottom="12px" />
            <MjmlClass name="postTitle" padding="0 20px 4px" font-family="Arial, sans-serif" color="#5078B3" font-size="14px" font-weight="700" line-height="19px" />
            <MjmlClass name="postText" font-family="Georgia, Times New Roman, serif" font-size="20px" color="#333333" line-height="28px"/>            
            <MjmlClass name="authorName" font-family="Arial, sans-serif" font-size="14px" font-weight="bold" line-height="1.4" text-transform="uppercase" />
            <MjmlClass name="authorText" font-family="Georgia,'Times New Roman', serif" padding-bottom="20px" font-size="20px" color="#0B0B0B" line-height="28px"/>
            <MjmlClass name="emailText" align="center" font-family="Arial" font-style="normal" font-size="17px" padding-bottom="14px"/>
            <MjmlClass name="emailButton" align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#1c3b62" text-decoration="underline" />
            <MjmlClass name="bottomText" font-family="Arial" font-size="12px" color="#33333380" line-height="1.5" />
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
            <MjmlGroup>
                 <MjmlColumn width="66.7%">
                <MjmlImage src="https://img.theepochtimes.com/assets/uploads/2022/06/09/MBLeft.jpg"  />
            </MjmlColumn>
            <MjmlColumn width="33.3%">
                <MjmlImage src="https://img.theepochtimes.com/assets/uploads/2022/06/27/Concept-14-V2-Right.jpeg" /> 
            </MjmlColumn>
            </MjmlGroup> 
        </MjmlSection>
        <MjmlSection>
            <MjmlColumn>
                <MjmlText align="center" font-family="Arial, sans-serif" font-size="14px" line-height="1.4" font-weight="700">July 20, 2022</MjmlText>
            </MjmlColumn>
        </MjmlSection>
        

        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle" >WORDS OF WISDOM</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
                <MjmlText align="center" padding-top="20px" font-family="Georgia,Times New Roman, serif" font-size="20px" font-style="italic" line-height="1.4">“The real problem is not why some pious, humble, believing people suffer, but why some do not.”</MjmlText>
                <MjmlText align="center" padding="16px 0 24px 0" font-family="Georgia,Times New Roman, serif" font-size="18px" font-weight="700" line-height="1.2">C. S. LEWIS</MjmlText>
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle">TOP NEWS</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
            <MjmlColumn width="480px">
                <MjmlImage padding="20px 0 16px 0" mjClass="fwImage" src="https://img.theepochtimes.com/assets/uploads/2022/06/28/Supreme-Court-GettyImages-1404674463-1200x800-700x420.jpg" />
                <MjmlText mjClass="fwTag"><div className='mobile_hide'>Crime and Incidents</div></MjmlText>
                <MjmlText mjClass="fwText">Supreme Court to Hear Fraud Appeal Related to Cuomo-Era Scandal</MjmlText>						
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
                <MjmlImage  mjClass="postImage" src="https://www.theepochtimes.com/assets/uploads/2022/05/06/donald-trump-approval-rating.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Heath News</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Median Drug Launch Price 85 Times Higher Compared to 2008</div></MjmlText>
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
         
        
        <MjmlSection padding="8px 0 20px 0">
            <MjmlWrapper padding="20px" border="1px solid #3890CF" >
            <MjmlSection> 
                <MjmlColumn>
                    <MjmlText padding-top="20px" mjClass="CTA_Content">Dear Reader, </MjmlText>
                    <MjmlSpacer />
                    <MjmlSpacer />
                    <MjmlText  font-family="Arial" font-size="16px">See what Dr. Robert Malone had to say about us:</MjmlText>
                    <MjmlSpacer />
                    <MjmlSpacer />
                </MjmlColumn>
            </MjmlSection>
            <MjmlSection padding="0">    
                <MjmlColumn width="30%" >
                    <MjmlImage width="180px" padding-bottom="10px" src="https://www.theepochtimes.com/assets/uploads/2022/02/02/Dr.-Robert-Malone-still-2400-e1641144014902.jpeg" />
                </MjmlColumn>
                <MjmlColumn width="70%">
                     <MjmlText align="left" mjClass='CTA_Content'>""The Epoch Times, by the way, all the way through COVID-19, has been a truth-teller.""</MjmlText>
                     <MjmlSpacer />
                     <MjmlSpacer />
                     <MjmlText align="left"  mjClass='CTA_Content' font-weight="bold">Dr. Robert Malone</MjmlText>
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
                    <MjmlButton padding-top="28px" color="#ffffff" font-size="14px" border-radius="4px" background-color="#3890CF">Subscribe & Support Us</MjmlButton>
                </MjmlColumn>
            </MjmlSection>
        </MjmlWrapper>
        </MjmlSection>

        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/07/06/Disney-Workers-Rally-for-Medical-Freedom-Sept-26-2021-in-Orlando-1200x900-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className="mobile_hide">US</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Disney Employees Suing Company Over Vaccine Exemption Refusals</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
         
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass='postImage' width="180px"src="https://img.theepochtimes.com/assets/uploads/2022/07/05/Highland-Park-law-enforcement-1-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Crime and Incidents</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Illinois Shooting Suspect Wore Women’s Clothing as Disguise After Shooting: Police</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
         

        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass='postImage' width="180px" src="https://img.theepochtimes.com/assets/uploads/2022/07/05/Highland-Park-law-enforcement-1-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Media & Big Tech</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Journalist Alex Berenson Reaches Settlement With Twitter</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
         
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass='postImage' width="180px" src="https://img.theepochtimes.com/assets/uploads/2021/10/29/Kristi-Noem_SD-1200x800-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Politics</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Gov. Kristi Noem: ‘I Would Be Shocked’ If Asked to Run With Trump in 2024</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
         
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/06/24/Donald-Trump-1-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Donald Trump</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Here’s What Trump Says Inflation Would Be Like If He Were Still President</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
        
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/01/19/shutterstock_417318079-700x420.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Supplements</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>A Common Nutritional Supplement Can Cause Cancer and Heart Damage</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle">POSITIVE NEWS</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/07/05/AdobeStock_420008230-700x420.jpeg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Australia</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Humpback Whale Songs Show Humans Not the Only Species Capable of Cultural Transmission</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="35%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="35%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
        
        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle">EPOCH TV</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/07/06/ZUBY-FINAL-600x338.jpg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>American Thought Leaders</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>‘The Pandemic of Cowardice’—Zuby Talks Transgender Athletes in Women’s Sports, COVID Disinformation, Roe v. Wade</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="30%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="40%"> 
                    <MjmlButton mjClass="mjButton">WATCH VIDEO</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding-top="15px">
            <MjmlColumn width="30%">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/07/05/AdobeStock_420008230-700x420.jpeg" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText mjClass="postTitle"><div className='mobile_hide'>Truth Over News</div></MjmlText>
                <MjmlText mjClass="postText"><div className='post_text'>Voicemail Reveals Joe Biden Worried About Fallout From Hunter’s Business Dealings With Missing CCP Princeling Ye Jianming | Truth Over News</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="30%"></MjmlColumn>
                  <MjmlColumn width="30%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="40%"> 
                    <MjmlButton mjClass="mjButton">WATCH VIDEO</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
        </MjmlSection>
         
        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle">A WORD FROM OUR SPONSOR</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
            <MjmlColumn width="30%" padding-top="15px">
                <MjmlImage mjClass="postImage" src="https://img.theepochtimes.com/assets/uploads/2022/07/06/middle.png" />
            </MjmlColumn>
            <MjmlColumn width="70%">
                <MjmlText padding="20px 0 0 20px" font-family="Georgia, Times New Roman, serif" font-size="16px" color="#555555" line-height="1.4">
                    It doesn’t matter <span href="#" font-weight="700" text-decoration="underline" color="#2a519f">how much money you have in your 401k or IRA</span>, you need to <span href='#'>listen to Louis Navellier's forecast</span>.

...And no, he’s not predicting a stock market crash, recession or a currency collapse.

It’s got nothing to do with inflation, either.

A powerful force is driving a wedge between the haves and the have-nots.

Click here for key steps every American should take right now - you’ll be ahead of everyone else struggling to understand what is really going on.
                </MjmlText>
            </MjmlColumn>
        </MjmlSection>
        
        
        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle"> EPOCH OPINION</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="20px 0 12px 0">
            <MjmlGroup>
            <MjmlColumn width="25%">
                <MjmlImage cssClass="authorImg" align="left" border-radius="50%" width="120px"  src="https://img.theepochtimes.com/assets/uploads/2022/06/02/WEB_DavidBell.jpg"></MjmlImage>
            </MjmlColumn>
            <MjmlColumn width="75%">
                <MjmlText mjClass="authorName"><div>DAVID BELL</div></MjmlText>
                <MjmlText mjClass="authorText"><div>How to Model Fallacy, According to the Lancet</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="10%"></MjmlColumn>
                  <MjmlColumn width="40%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="50%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
            </MjmlGroup>
        </MjmlSection>
        <MjmlSection padding="20px 0 12px 0">
            <MjmlGroup>
            <MjmlColumn width="25%">
                <MjmlImage cssClass="authorImg" align="left" border-radius="50%" width="120px" src="https://img.theepochtimes.com/assets/uploads/2020/01/27/James-Gorrie.jpg"></MjmlImage>
            </MjmlColumn>
            <MjmlColumn width="75%">
                <MjmlText mjClass="authorName"><div>JAMES GORRIE</div></MjmlText>
                <MjmlText mjClass="authorText"><div>The Big Lie of Woke Capitalism</div></MjmlText>
                <MjmlGroup width="100%">
                  <MjmlColumn width="10%"></MjmlColumn>
                  <MjmlColumn width="40%">
                    <MjmlButton mjClass="mjButton">SHARE*</MjmlButton>
                  </MjmlColumn>
                  <MjmlColumn width="50%"> 
                    <MjmlButton mjClass="mjButton">READ MORE</MjmlButton>
                  </MjmlColumn>
               </MjmlGroup>
            </MjmlColumn>
            </MjmlGroup>
        </MjmlSection>

        <MjmlSection>
            <MjmlColumn>
                <MjmlText mjClass="fwTitle">EPOCH FUN</MjmlText>
                <MjmlDivider border-color="#223435" border-width="2px" />
            </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding-top="17px">
          <MjmlColumn>
            <MjmlImage fluidOnMobile="TRUE" src="https://www.theepochtimes.com/assets/uploads/2022/05/02/Frame-41-1.png"  />
            <MjmlText padding-top="20px" font-family="Georgia, Times New Roman, serif" font-size="20px" line-height="1.4" font-Style='italic'>You can support us by donating your unused and unwanted car.</MjmlText>
            <MjmlText padding="16px 0 20px" align='center' font-family="Georgia, Times New Roman, serif" font-size="18px" line-height="1.2" font-weight="700">Call 1-800-822-3828 or visit epochcar.org</MjmlText>
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
        <MjmlColumn width="33%" padding="0 10px 0 10px">
          <MjmlText cssClass="email_text" mjClass="emailText">Trouble viewing this email?</MjmlText>
          <MjmlText mjClass="emailButton">View in browser</MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff" padding-bottom="0">
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