package models;

import io.ebean.Model;
import io.ebean.annotation.WhenCreated;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
;

@Entity
@Table(name = "receipts")
public class Receipt extends Model {

    @Id
    public long receiptId;

    @NotNull
    public String paymentMethod;

    @NotNull
    @WhenCreated
    public LocalDateTime datePaid;
}
