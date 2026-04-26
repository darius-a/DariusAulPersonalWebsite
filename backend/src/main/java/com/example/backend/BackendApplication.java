package com.example.backend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
// @SpringBootApplication loads the entire spring app when main() method runs
// @RestController means this class handles HTTP requests and returns data directly (not as HTML pages)
@SpringBootApplication
@RestController
public class BackendApplication {
 
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
 
	// test endpoint: visit /hello or /hello?name=World to check the server is running
	// @CrossOrigin allows the frontend (which is running on a different port) to call this endpoint
	@GetMapping("/hello")
	@CrossOrigin(origins = "*")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }
 
	// the three endpoints below just return the static lists from PortfolioData in JSON format
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
