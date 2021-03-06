package com.ecommerce.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "users")
public class User {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;
	 	
	 	@NotNull
	    @Column(name = "first_name")
	    private String firstName;
	 	
	 	@NotNull
	    @Column(name = "last_name")
	    private String lastName;

	 	@NotNull
	    @Column(name = "email",unique=true)
	    private String email;

	 	@NotNull
	    @Column(name = "password")
	    private String password;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
	    
		public User(String firstName, String lastName, String email, String password) {
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.email = email;
	        this.password = password;
	    }
		
		 public User() {
		    }
}
