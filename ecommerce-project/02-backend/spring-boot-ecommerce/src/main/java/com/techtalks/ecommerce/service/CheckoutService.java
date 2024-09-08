package com.techtalks.ecommerce.service;

import com.techtalks.ecommerce.dto.Purchase;
import com.techtalks.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
