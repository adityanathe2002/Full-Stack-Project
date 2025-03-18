package com.openapi.nasa.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name ="apod")
public class NasaApod {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="id")
	@Size(min = 1, message = "is required")
	private int id;
	
	@Column(name ="copyright")
	@Size(min = 1, message = "is required")
	private String copyright;
	
	@Column(name ="date")
	@Size(min = 1, message = "is required")
	@NotNull(message = "is required")
	private String date;
		
	@Column(columnDefinition =  "TEXT")
	@Lob
	@Size(min = 1, message = "is required")
	@NotNull(message = "is required")
	private String explanation;
	
	@Column(name ="hdurl")
	@Size(min = 1, message = "is required")
	private String hdurl;
	
	@Column(name ="title")
	@Size(min = 1, message = "is required")
	@NotNull(message = "is required")
	private String title;
	
	@Column(name ="url")
	@Size(min = 1, message = "is required")
	@NotNull(message = "is required")
	private String url;

	public NasaApod() {

	}

	public NasaApod(int id, String copyright, String date, String explanation, String hdurl, String title, String url) {

		this.id = id;
		this.copyright = copyright;
		date = date;
		this.explanation = explanation;
		this.hdurl = hdurl;
		this.title = title;
		this.url = url;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCopyRight() {
		return copyright;
	}

	public void setCopyRight(String copyright) {
		this.copyright = copyright;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	public String getHdurl() {
		return hdurl;
	}

	public void setHdurl(String hdurl) {
		this.hdurl = hdurl;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "NasaApod [id=" + id + ", copyright=" + copyright + ", date=" + date + ", explanation=" + explanation
				+ ", hdurl=" + hdurl + ", title=" + title + ", url=" + url + "]";
	}
}
