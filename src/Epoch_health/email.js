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
  MjmlDivider,
  MjmlSpacer,
  MjmlAttributes
} from 'mjml-react';



export const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlAttributes>
          <MjmlSection padding={0} />
          
        </MjmlAttributes>
        <MjmlStyle>
        </MjmlStyle>
      </MjmlHead>
      <MjmlBody>
        <MjmlSection padding={0}>
        <MjmlColumn width="100%">
            <MjmlImage padding="0" width="600px" src="https://img.theepochtimes.com/assets/uploads/2022/07/08/mobile.png" />
        </MjmlColumn>
        </MjmlSection>

        <MjmlSection padding={0}>
        <MjmlColumn width="100%">
            <MjmlImage padding="16px 0 16px" width="600px" src="https://img.theepochtimes.com/assets/uploads/2022/07/08/dmobile.png" alt="Epoch Health"/>
          </MjmlColumn> 
        </MjmlSection >
        <MjmlSection padding={0}>
        <MjmlColumn width="100%">
            <MjmlText padding="0 0 8px" align="left" color="#057623" font-weight="700px" font-size="18px">WHAT'S NEW</MjmlText>
            <MjmlDivider padding="0" border-width="2px" border-style="solid" />
            <MjmlImage padding="20px 0 20px 0" width="600px"src="https://img.theepochtimes.com/assets/uploads/2022/07/08/Eve-Moon-Tight-1-700x420.jpg" />
            <MjmlText padding="0 0 8px" font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Quis dapibus gravida nunc, rhoncus sit diam </MjmlText>
            <MjmlText padding="0 0 8px" font-family="Arial" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
            <MjmlText padding="0 0 8px" font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Eu ut non platea suscipit semper venenatis id. Id nec dui, faucibus dictumst pulvinar morbi diam non nunc.</MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection padding="0">
        <MjmlColumn width="50%">
        </MjmlColumn>
        <MjmlColumn width="25%">
          <MjmlButton padding="16px 0 28px" href='#' font-size="14px" font-weight="700" background-color="#ffffff" color="#057623">Share*</MjmlButton>
        </MjmlColumn>
        <MjmlColumn width="25%">
          <MjmlButton padding="16px 0 28px" href="#" font-size="14px" font-weight="700" backgroundColor={'#057623'} color="#ffffff" borderRadius={'60px'}>Read More</MjmlButton>
        </MjmlColumn>
      </MjmlSection>
        <MjmlSection padding={0}>
        <MjmlColumn width="100%">
            <MjmlImage width="600px" src="https://img.theepochtimes.com/assets/uploads/2022/07/08/dmobile.png" alt="Epoch Health"/>
          </MjmlColumn> 
        </MjmlSection >

        <MjmlSection padding-top="16px">
        <MjmlColumn width="50%">
          <MjmlImage  padding="20px 0 57px 16px"src="https://image.shutterstock.com/image-photo/dragon-fruit-small-size-that-260nw-2107016282.jpg" />
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Egestas sed orci risus tempor pulvinar leo</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Duis a sociis consequat ac amet cras gravida tristique urna. Semper et nunc tellus porta molestie sed ut leo.</MjmlText>      
        </MjmlColumn>
        <MjmlColumn width="50%"></MjmlColumn>
        <MjmlColumn width="25%">
          <MjmlButton  padding="0px 0 28px" href='#' font-size="14px" font-weight="700" background-color="#ffffff" color="#057623">Share*</MjmlButton>
        </MjmlColumn>
        <MjmlColumn width="25%">
          <MjmlButton  padding="0px 0 28px" href="#" font-size="14px" font-weight="700" backgroundColor={'#057623'} color="#ffffff" borderRadius={'60px'}>Read More</MjmlButton>
        </MjmlColumn>
        </MjmlSection>
      <MjmlSection background-color="#ffffff" padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding-top="16px">
        <MjmlColumn width="50%">
          <MjmlImage  padding="20px 0 57px 16px"src="https://image.shutterstock.com/image-photo/dragon-fruit-small-size-that-260nw-2107016282.jpg"/>
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Egestas sed orci risus tempor pulvinar leo</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Duis a sociis consequat ac amet cras gravida tristique urna. Semper et nunc tellus porta molestie sed ut leo.</MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff" padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding-top="16px">
        <MjmlColumn width="50%">
          <MjmlImage  padding="20px 0 57px 16px"src="om/image-photo/dragon-fruit-small-size-that-260nw-2107016282.jpg"/>
        </MjmlColumn>

        <MjmlColumn width="50%">
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Egestas sed orci risus tempor pulvinar leo</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Duis a sociis consequat ac amet cras gravida tristique urna. Semper et nunc tellus porta molestie sed ut leo.</MjmlText>
          <MjmlButton align="right" background-color="#ffffff" color="#057623" font-size="14px" font-weight="700">
            <MjmlButton background-color="#ffffff" color="#057623"> Share*&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</MjmlButton>
            <MjmlButton background-color="#057623" color="#057623" font-size="14px" font-weight="700"> Read More</MjmlButton>
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff" padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding-top="16px">
        <MjmlColumn width="50%">
          <MjmlImage  padding="20px 0 57px 16px"src="https://image.shutterstock.com/image-photo/dragon-fruit-small-size-that-260nw-2107016282.jpg"/>
        </MjmlColumn>

        <MjmlColumn width="50%">
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Egestas sed orci risus tempor pulvinar leo</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Duis a sociis consequat ac amet cras gravida tristique urna. Semper et nunc tellus porta molestie sed ut leo.</MjmlText>
          <MjmlButton align="right" background-color="#ffffff" color="#057623" font-size="14px" font-weight="700">
            <MjmlButton background-color="#ffffff" color="#057623"> Share*&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</MjmlButton>
            <MjmlButton background-color="#057623" color="#057623" font-size="14px" font-weight="700"> Read More</MjmlButton>
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff" padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection>
        <MjmlColumn width="100%">
          <MjmlText align="left" color="#057623" font-weight="700px" font-size="18px">FROM EXPERTS</MjmlText>
          <MjmlDivider border-width="2px" border-style="solid" border-color="green" />
          <MjmlImage width="600px" src="https://wgxa.tv/resources/media2/16x9/full/1015/center/80/6c40b14f-2638-48a2-8485-f93d1885d3c1-large16x9_fruitbowl_m1xxOV.jpg"></MjmlImage>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Quis dapibus gravida nunc, rhoncus sit diam </MjmlText>
          <MjmlText font-family="Arial" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Eu ut non platea suscipit semper venenatis id. Id nec dui, faucibus dictumst pulvinar morbi diam non nunc.</MjmlText>
          <MjmlButton align="right" background-color="#ffffff" color="#057623" font-size="14px" font-weight="700">
            <MjmlButton background-color="#ffffff" color="#057623"> Share*&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</MjmlButton>
            <MjmlButton background-color="#057623" color="#057623" font-size="14px" font-weight="700"> Read More</MjmlButton>
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff"  padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection>
        <MjmlColumn width="50%">
          <MjmlImage src="https://wgxa.tv/resources/media2/16x9/full/1015/center/80/6c40b14f-2638-48a2-8485-f93d1885d3c1-large16x9_fruitbowl_m1xxOV.jpg"></MjmlImage>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Vehicula etiam non dolor non nunc luctus</MjmlText>
          <MjmlText font-family="Arial" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Id amet curabitur aenean suspendisse nunc nisl et facilisis. Ac, viverra sagittis aliquam, quam et nullam gravida.</MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlImage src="https://wgxa.tv/resources/media2/16x9/full/1015/center/80/6c40b14f-2638-48a2-8485-f93d1885d3c1-large16x9_fruitbowl_m1xxOV.jpg"></MjmlImage>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Feugiat facilisis amet turpis in sit in</MjmlText>
          <MjmlText font-family="Arial" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Ac volutpat molestie at lorem turpis ornare aliquam non eget. Et duis hac est mi tellus integer.</MjmlText>
        </MjmlColumn>
      </MjmlSection>
        <MjmlSection padding="0">
        <MjmlColumn width="25%">
          <MjmlButton align="left" padding="16px 0 28px" href='#' font-size="14px" font-weight="700" background-color="#ffffff" color="#057623">Share*</MjmlButton>
        </MjmlColumn>
        <MjmlColumn width="25%">
          <MjmlButton align="left" padding="16px 0 28px" href="#" font-size="14px" font-weight="700" backgroundColor={'#057623'} color="#ffffff" borderRadius={'60px'}>Read More</MjmlButton>
        </MjmlColumn>
        <MjmlColumn width="50%">
        </MjmlColumn>
        </MjmlSection>
      <MjmlSection>
        
      </MjmlSection>
      <MjmlSection background-color="#ffffff" padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>


      <MjmlSection>
        <MjmlColumn width="50%">
          <MjmlImage src="https://wgxa.tv/resources/media2/16x9/full/1015/center/80/6c40b14f-2638-48a2-8485-f93d1885d3c1-large16x9_fruitbowl_m1xxOV.jpg"></MjmlImage>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Nec sodales sed id vitae in non</MjmlText>
          <MjmlText font-family="Arial" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Habitasse felis posuere risus quis mauris pulvinar luctus massa. Mattis lectus quam malesuada lacinia purus.</MjmlText>
          <MjmlButton align="right" background-color="#ffffff" color="#057623" font-size="14px" font-weight="700">
            <MjmlButton background-color="#ffffff" color="#057623"> Share*&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</MjmlButton>
            <MjmlButton background-color="#057623" color="#057623" font-size="14px" font-weight="700"> Read More</MjmlButton>
          </MjmlButton>
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlImage src="https://wgxa.tv/resources/media2/16x9/full/1015/center/80/6c40b14f-2638-48a2-8485-f93d1885d3c1-large16x9_fruitbowl_m1xxOV.jpg"></MjmlImage>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="24px" color="#223435" text-transform="capitalize">Ultricies elementum purus sollicitudin eu faucibus adipiscing</MjmlText>
          <MjmlText font-family="Arial" font-weight="400" font-size="16px" color="#6A6A6A" text-transform="capitalize">By Leo Babauta</MjmlText>
          <MjmlText font-family='Georgia' font-style="normal" font-weight="400" font-size="18px" color="#333333" text-transform="capitalize">Tempus ut donec egestas consectetur ut tellus ut congue aliquet. Accumsan, sed curabitur elementum, faucibus at.</MjmlText>
          <MjmlButton align="right" background-color="#ffffff" color="#057623" font-size="14px" font-weight="700">
            <MjmlButton background-color="#ffffff" color="#057623"> Share*&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</MjmlButton>
            <MjmlButton background-color="#057623" color="#057623" font-size="14px" font-weight="700"> Read More</MjmlButton>
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff"  padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection>
        <MjmlColumn width="33%">
          <MjmlText align="center" font-family="Arial" font-style="normal" font-size="17px">Share This Email With A Friend</MjmlText>
          <MjmlText align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#057623" text-decoration="underline">Forward</MjmlText>
        </MjmlColumn>
        <MjmlColumn width="33%">
          <MjmlText align="center" font-family="Arial" font-style="normal" font-size="17px">Receive This Email From A Friend</MjmlText>
          <MjmlText align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#057623" text-decoration="underline">Subscribe</MjmlText>
        </MjmlColumn>
        <MjmlColumn width="33%">
          <MjmlText align="center" font-family="Arial" font-style="normal" font-size="17px">Trouble viewing this email?</MjmlText>
          <MjmlText align="center" font-family="Inter" font-style="normal" font-size="17px" font-weight="700" color="#057623" text-decoration="underline">View in browser</MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff"  padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection padding-top="16px" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlText align="center" font-weight="700" font-size="17px">Download the app</MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding="0">
        <MjmlColumn>
          <MjmlImage  width="316px" src="https://img.theepochtimes.com/assets/uploads/2021/12/15/appstores.png" href=""></MjmlImage>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection background-color="#ffffff"  padding-top="0" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlDivider border-color="#DFE3E8" border-width="1px" />
        </MjmlColumn>
      </MjmlSection>
      
      <MjmlSection padding-top="16px" padding-bottom="0">
        <MjmlColumn width="100%">
          <MjmlText  font-family="Arial" font-size="12px" font-weight="400" color="rgba(51, 51, 51, 0.5);">The information in this newsletter is not intended to replace a one-on-one relationship with a qualified health care professional and is not intended as medical advice. It is intended as a sharing of knowledge and information from the research and experience of many experts and journalists. The Epoch Times encourages you to make your own health care decisions based upon your research and in partnership with a qualified health care professional. </MjmlText>
          <MjmlSpacer height="5px"></MjmlSpacer>
          <MjmlText>*When sharing an article, giftaccess@TheEpochTimes.com is added to the list of recipients. If your friend is not already a subscriber, we will send them a special link for free access to the article. Manage your email preferences here.</MjmlText>
          <MjmlSpacer height="5px"></MjmlSpacer>
          <MjmlText>Copyright © 2022 The Epoch Times. All rights reserved.
            The Epoch Times. 5 Penn Plaza, 8th FL, New York, NY 10001</MjmlText>
         
        </MjmlColumn>
        
      </MjmlSection>
      <MjmlSection padding="0">
        <MjmlColumn >
          <MjmlText align="center" color="#057623" font-size="13px"><a href="#" color="#057623" cssclass="bottomText">Terms & Condition</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" color="#057623" cssclass="bottomText">Customer Sevice</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" color="#057623" cssclass="bottomText">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" color="#057623" cssclass="bottomText">Unsubscribe</a></MjmlText>  
        </MjmlColumn>
      </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
