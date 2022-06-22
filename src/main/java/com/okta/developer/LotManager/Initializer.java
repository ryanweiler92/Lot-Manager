package com.okta.developer.LotManager;

import com.okta.developer.LotManager.model.Car;
import com.okta.developer.LotManager.model.Lot;
import com.okta.developer.LotManager.model.LotRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final LotRepository repository;

    public Initializer(LotRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Ryan's Cars").forEach(name ->
                repository.save(new Lot(name))
        );

        Lot rlot = repository.findByName("Ryan's Cars");
        Car c = Car.builder().make("Ford")
                .model("Explorer")
                .year(2015)
                .mileage(85000)
                .image("https://file.kelleybluebookimages.com/kbb/base/evox/CP/9714/2015-Ford-Explorer-front_9714_032_1843x881_H5_cropped.png")
                .build();
        rlot.setCars(Collections.singleton(c));
        repository.save(rlot);

        repository.findAll().forEach(System.out::println);
    }
}
