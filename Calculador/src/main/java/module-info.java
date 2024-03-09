module com.mycompany.calculador {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.base;

    opens com.mycompany.calculador to javafx.fxml;
    exports com.mycompany.calculador;
}
