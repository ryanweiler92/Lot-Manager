package com.okta.developer.LotManager.web;

import com.okta.developer.LotManager.model.Lot;
import com.okta.developer.LotManager.model.LotRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class LotController {

    private final Logger log = LoggerFactory.getLogger(LotController.class);
    private LotRepository lotRepository;

    public LotController(LotRepository lotRepository) {
        this.lotRepository = lotRepository;
    }

    @GetMapping("/lots")
    Collection<Lot> lots() {
        return lotRepository.findAll();
    }

    @GetMapping("/lot/{id}")
    ResponseEntity<?> getLot(@PathVariable Long id) {
        Optional<Lot> lot = lotRepository.findById(id);
        return lot.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/lot")
    ResponseEntity<Lot> createGroup(@Valid @RequestBody Lot lot) throws URISyntaxException {
        log.info("Request to create lot: {}", lot);
        Lot result = lotRepository.save(lot);
        return ResponseEntity.created(new URI("/api/lot/" + result.getId()))
                .body(result);
    }

    @PutMapping("/lot/{id}")
    ResponseEntity<Lot> updateGroup(@Valid @RequestBody Lot lot) {
        log.info("Request to update lot: {}", lot);
        Lot result = lotRepository.save(lot);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/lot/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        log.info("Request to delete lot: {}", id);
        lotRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
