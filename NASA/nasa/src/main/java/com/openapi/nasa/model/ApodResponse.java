	package com.openapi.nasa.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApodResponse {
	
	@JsonProperty("date")
	private String apodDate ;
	
	@JsonProperty("explanation")
	private String apodExplanation;
	
	@JsonProperty("hdurl")
	private String apodHdUrl;
	
	@JsonProperty("media_type")
	private String apodMediaType;
	
	@JsonProperty("service_version")
	private String apodServiceVersion;
	
	@JsonProperty("title")
	private String apodTitle;
	
	@JsonProperty("url")
	private String apodUrl;

	public String getApodDate() {
		return apodDate;
	}

	public void setApodDate(String apodDate) {
		this.apodDate = apodDate;
	}

	public String getApodExplanation() {
		return apodExplanation;
	}

	public void setApodExplanation(String apodExplanation) {
		this.apodExplanation = apodExplanation;
	}

	public String getApodHdUrl() {
		return apodHdUrl;
	}

	public void setApodHdUrl(String apodHdUrl) {
		this.apodHdUrl = apodHdUrl;
	}

	public String getApodMediaType() {
		return apodMediaType;
	}

	public void setApodMediaType(String apodMediaType) {
		this.apodMediaType = apodMediaType;
	}

	public String getApodServiceVersion() {
		return apodServiceVersion;
	}

	public void setApodServiceVersion(String apodServiceVersion) {
		this.apodServiceVersion = apodServiceVersion;
	}

	public String getApodTitle() {
		return apodTitle;
	}

	public void setApodTitle(String apodTitle) {
		this.apodTitle = apodTitle;
	}

	public String getApodUrl() {
		return apodUrl;
	}

	public void setApodUrl(String apodUrl) {
		this.apodUrl = apodUrl;
	}

	public ApodResponse() {
		
	}

	public ApodResponse(String apodDate, String apodExplanation, String apodHdUrl, String apodMediaType,
			String apodServiceVersion, String apodTitle, String apodUrl) {
		this.apodDate = apodDate;
		this.apodExplanation = apodExplanation;
		this.apodHdUrl = apodHdUrl;
		this.apodMediaType = apodMediaType;
		this.apodServiceVersion = apodServiceVersion;
		this.apodTitle = apodTitle;
		this.apodUrl = apodUrl;
	}
	
}
