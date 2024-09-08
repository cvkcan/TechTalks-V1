package com.techtalks.ecommerce.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class PurchaseResponse {
    //@NonNull
    private final String orderTrackingNumber;
}
