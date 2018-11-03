package models;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.NotNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patients")
public class Patient extends Model {

    @Id
    public long patientId;

    @NotNull
    public String firstName;

    @NotNull
    public String lastName;

    @Column(nullable = false, unique = true)
    public String phoneNumber;

    @NotNull
    public String gender;

    @NotNull
    public int age;

    public int height;

    @NotNull
    public String maritalStatus;

    public static Finder<Long, Patient> find = new Finder<>(Patient.class);

}
