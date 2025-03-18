package com.openapi.nasa.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.openapi.nasa.model.ApodResponse;

@RestController
public class NasaController {
	
	private final String APOD_URL="https://api.nasa.gov/planetary/apod";
	private final String API_KEY="NRN6xVnLAtF5f2ZP3BhTZJZFzLaHXekDZ7qvkpNb";
	private RestTemplate template= new RestTemplate();
	
	@GetMapping("/apod")
	public ApodResponse getApodJson( @RequestParam (required = false, defaultValue = "2024-03-13") String date){
		return  template.getForObject(APOD_URL + "?api_key=" + API_KEY+"&date="+date  , ApodResponse.class);

	}
	
	@GetMapping("/hi")
	public String getMessage() {
		return "bye";
	}
	
	@GetMapping("/getIdName")
	public String getIdName(@RequestParam int id, @RequestParam String name) {
		return "id=" + id + " name="+ name;
	}
	
}