package com.okta.developer.LotManager.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LotRepository extends JpaRepository<Lot, Long> {
    Lot findByName(String name);
}
