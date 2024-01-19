import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/jdbcdemo";
        String username = "root";
        String password = "";
        Connection connection = null;
        PreparedStatement checkStatement = null;
        PreparedStatement insertStatement = null;
        ResultSet resultSet = null;
        Statement statement = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, username, password);

            try {
                // Check if the record exists
                String checkQuery = "SELECT * FROM student WHERE id = ?";
                checkStatement = connection.prepareStatement(checkQuery);
                checkStatement.setInt(1, 101); // Set the ID you want to check

                resultSet = checkStatement.executeQuery();

                if (resultSet.next()) {
                    // Record already exists, do something or just print a message
                    System.out.println("Record with ID 101 already exists. Not inserting.");
                } else {
                    // Insert data
                    String insertQuery = "INSERT INTO student (id, name, age, school) VALUES (?, ?, ?, ?)";
                    insertStatement = connection.prepareStatement(insertQuery);

                    // Set values
                    insertStatement.setInt(1, 100);
                    insertStatement.setString(2, "Elite");
                    insertStatement.setInt(3, 23);
                    insertStatement.setString(4, "Rwamagana Leader's School");

                    int rowsAffected = insertStatement.executeUpdate();

                    if (rowsAffected > 0) {
                        System.out.println("Data inserted successfully!");
                    } else {
                        System.out.println("Failed to insert data.");
                    }

                    // Close insertStatement before executing the SELECT query
                    insertStatement.close();


                }

                statement = connection.createStatement();
                resultSet = statement.executeQuery("SELECT * FROM student");

                ResultSetMetaData metaData = resultSet.getMetaData();
                int columnCount = metaData.getColumnCount();
                while (resultSet.next()) {
                    for (int i = 1; i <= columnCount; i++) {
                        String columnName = metaData.getColumnName(i);
                        Object value = resultSet.getObject(i);
                        System.out.println(columnName + ": " + value);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                try {
                    if (checkStatement != null) {
                        checkStatement.close();
                    }
                    if (insertStatement != null) {
                        insertStatement.close();
                    }
                    if (resultSet != null) {
                        resultSet.close();
                    }
                    if (connection != null) {
                        connection.close();
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
//
//import java.sql.*;
//
//public class JDBCDemo {
//    public static void main(String[] args) {
//        String url = "jdbc:mysql://localhost:3306/jdbcdemo";
//        String username = "root";
//        String password = "";
//        Connection connection = null;
//        PreparedStatement checkStatement = null;
//        PreparedStatement insertStatement = null;
//        ResultSet resultSet = null;
//        Statement statement = null;
//
//        try {
//            Class.forName("com.mysql.cj.jdbc.Driver");
//            connection = DriverManager.getConnection(url, username, password);
//
//            try {
//                // Check if the record exists
//                String checkQuery = "SELECT * FROM student WHERE id = ?";
//                checkStatement = connection.prepareStatement(checkQuery);
//                checkStatement.setInt(1, 101); // Set the ID you want to check
//
//                resultSet = checkStatement.executeQuery();
//
//                if (resultSet.next()) {
//                    // Record already exists, do something or just print a message
//                    System.out.println("Record with ID 101 already exists. Not inserting.");
//                } else {
//                    // Insert data
//                    String insertQuery = "INSERT INTO student (id, name, age, school) VALUES (?, ?, ?, ?)";
//                    insertStatement = connection.prepareStatement(insertQuery);
//
//                    // Set values
//                    insertStatement.setInt(1, 100);
//                    insertStatement.setString(2, "Elite");
//                    insertStatement.setInt(3, 23);
//                    insertStatement.setString(4, "Rwamagana Leader's School");
//
//                    int rowsAffected = insertStatement.executeUpdate();
//
//                    if (rowsAffected > 0) {
//                        System.out.println("Data inserted successfully!");
//                    } else {
//                        System.out.println("Failed to insert data.");
//                    }
//
//                    // Close insertStatement before executing the SELECT query
//                    insertStatement.close();
//
//
//                }
//
//                statement = connection.createStatement();
//                resultSet = statement.executeQuery("SELECT * FROM student");
//
//                ResultSetMetaData metaData = resultSet.getMetaData();
//                int columnCount = metaData.getColumnCount();
//                while (resultSet.next()) {
//                    for (int i = 1; i <= columnCount; i++) {
//                        String columnName = metaData.getColumnName(i);
//                        Object value = resultSet.getObject(i);
//                        System.out.println(columnName + ": " + value);
//                    }
//                }
//            } catch (Exception e) {
//                e.printStackTrace();
//            } finally {
//                try {
//                    if (checkStatement != null) {
//                        checkStatement.close();
//                    }
//                    if (insertStatement != null) {
//                        insertStatement.close();
//                    }
//                    if (resultSet != null) {
//                        resultSet.close();
//                    }
//                    if (connection != null) {
//                        connection.close();
//                    }
//                } catch (SQLException e) {
//                    e.printStackTrace();
//                }
//            }
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//}
