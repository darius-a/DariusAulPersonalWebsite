package com.example.backend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@GetMapping("/hello") //test url for hello
	@CrossOrigin(origins = "*")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }

	@GetMapping("/projects")
	@CrossOrigin(origins = "*")
    public Object getProjects() {
        return com.example.backend.PortfolioData.PROJECTS;
    }

    @GetMapping("/experience")
	@CrossOrigin(origins = "*")
    public Object getExperience() {
        return com.example.backend.PortfolioData.EXPERIENCE;
    }

    @GetMapping("/hobbies")
	@CrossOrigin(origins = "*")
    public Object getHobbies() {
        return com.example.backend.PortfolioData.HOBBIES;
    }


}
