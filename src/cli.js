import { render } from 'mjml-react';

// import { generate } from './Epoch_health/email';

import { generate_Ge } from './Good Evening/email';

import { generate_Mb } from './Morning Brief/email';

import { generate_Bn } from './Breaking_news/email';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);

