import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from './Checkout';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51K244WILIR4UakCXmvJkLzKMWz8tkfj7CBqNutsgKBWBoop603GSg0lERekEQp6Uj7iVRjEn1qHqRmQq2gnBDMQ000dAO539vC');

function PaymentForm() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{sk_test_51K244WILIR4UakCXpZqJ33QtSexruopsW4ZrW4GqBwCqMH25LL1wZURQ2ULQMYIjzFSGzAYrN6dSzejzSPVzVV7l00jXcHhSh5}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Checkout/>
    </Elements>
  );
};

export default PaymentForm;