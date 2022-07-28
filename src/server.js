import express from 'express';
import {render} from 'mjml-react';

import * as ep_health from './Epoch_health/email';
import * as email2 from './email-second';
import * as gd_evening from './Good Evening/email';
import * as MB_brief from './Morning Brief/email'
import * as Bk_news from './Breaking News/email'
import * as Bt_mind from './Better Mind/email'
import * as Ep_bright from './Epoch Bright/email'

const port = 3001;
const app = express();

app.get('/2', (req, res) => {
  const {html} = render(email2.generate(), {validationLevel: 'soft'});
  res.send(html);
});

// app.get('*/Epoch_health', (req, res) => {
//   const {html}  = render(ep_health.generate(), {validationLevel: 'soft'});
//   res.send(html);
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.get('*/Good_Evening', (req, res) => {
  const {html}  = render(gd_evening.generate_Ge(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('*/Morning_Brief', (req, res) => {
  const {html}  = render(MB_brief.generate_Mb(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('*/Breaking_news', (req, res) => {
  const {html}  = render(Bk_news.generate_Bn(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('*/Better_Mind', (req, res) => {
  const {html}  = render(Bt_mind.generate_Bm(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('*/Epoch_Bright', (req, res) => {
  const {html}  = render(Ep_bright.generate_Eb(), {validationLevel: 'soft'});
  res.send(html);
});
