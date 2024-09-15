package com.techtalks.ecommerce.service;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.techtalks.ecommerce.dto.PaymentInfo;
import com.techtalks.ecommerce.dto.Purchase;
import com.techtalks.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
