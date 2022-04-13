package com.ecommerce.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backend.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
