DROP DATABASE IF EXISTS flight_booking;
            CREATE DATABASE flight_booking;
            USE flight_booking;

-- Create Tables

CREATE TABLE USERS (
    id CHAR(36) PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(300) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    status ENUM('active', 'inactive'),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE TABLE TRANSACTIONS (
    id CHAR(36) PRIMARY KEY,
    post_date DATE NOT NULL,
    transaction_date DATE NOT NULL,
    reference_number VARCHAR(100) UNIQUE NOT NULL,
    merchant_data VARCHAR(150) NOT NULL,
    dollar_amount DECIMAL NOT NULL,
    close_date VARCHAR(50),
    category VARCHAR(50),
    user_id CHAR(36),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_transactions_close_date ON TRANSACTIONS(close_date);

CREATE INDEX idx_transactions_category ON TRANSACTIONS(category);

CREATE TABLE REPORTS (
    id CHAR(36) PRIMARY KEY,
    close_date VARCHAR(100),
    category VARCHAR(50) NOT NULL,
    total_amount DECIMAL NOT NULL,
    user_id CHAR(36),
    transaction_id CHAR(36),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    INDEX (close_date)
);

-- Add Foreign Key Constraints

ALTER TABLE TRANSACTIONS
ADD CONSTRAINT FK_Transactions_Users
FOREIGN KEY (user_id) REFERENCES USERS(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE REPORTS
ADD CONSTRAINT FK_Reports_Users
FOREIGN KEY (user_id) REFERENCES USERS(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE REPORTS
ADD CONSTRAINT FK_Reports_Transactions
FOREIGN KEY (transaction_id) REFERENCES TRANSACTIONS(id)
ON DELETE CASCADE ON UPDATE CASCADE;

