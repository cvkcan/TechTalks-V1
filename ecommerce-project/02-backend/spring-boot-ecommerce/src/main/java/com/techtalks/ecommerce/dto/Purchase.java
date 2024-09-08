package com.techtalks.ecommerce.dto;

import com.techtalks.ecommerce.entity.Address;
import com.techtalks.ecommerce.entity.Customer;
import com.techtalks.ecommerce.entity.Order;
import com.techtalks.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
