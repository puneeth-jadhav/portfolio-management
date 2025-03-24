DROP DATABASE IF EXISTS flight_booking;
            CREATE DATABASE flight_booking;
            USE flight_booking;

-- Create Tables

CREATE TABLE User (
    id CHAR(36) PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(300) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    status ENUM('active', 'inactive'),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_username ON User(username);

CREATE INDEX idx_email ON User(email);

CREATE TABLE Portfolio (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    name VARCHAR(50) NOT NULL,
    description VARCHAR(300),
    status ENUM('active', 'inactive'),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE TABLE Fund (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    ticker VARCHAR(100) NOT NULL UNIQUE,
    nav DECIMAL NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_name ON Fund(name);

CREATE INDEX idx_ticker ON Fund(ticker);

CREATE TABLE PortfolioFund (
    id CHAR(36) PRIMARY KEY,
    portfolio_id CHAR(36),
    fund_id CHAR(36),
    quantity DECIMAL NOT NULL,
    cost_basis DECIMAL NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE TABLE Alert (
    id CHAR(36) PRIMARY KEY,
    user_id CHAR(36),
    type VARCHAR(50) NOT NULL,
    message VARCHAR(300) NOT NULL,
    status ENUM('active', 'inactive'),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

CREATE TABLE HistoricalNAV (
    id CHAR(36) PRIMARY KEY,
    fund_id CHAR(36),
    nav_date DATE NOT NULL,
    nav_value DECIMAL NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

-- Add Foreign Key Constraints

ALTER TABLE Portfolio
ADD CONSTRAINT fk_portfolio_user
FOREIGN KEY (user_id) REFERENCES User(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE PortfolioFund
ADD CONSTRAINT fk_portfoli_fund_portfolio
FOREIGN KEY (portfolio_id) REFERENCES Portfolio(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE PortfolioFund
ADD CONSTRAINT fk_portfolio_fund_fund
FOREIGN KEY (fund_id) REFERENCES Fund(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE Alert
ADD CONSTRAINT fk_alert_user
FOREIGN KEY (user_id) REFERENCES User(id)
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE HistoricalNAV
ADD CONSTRAINT fk_historical_nav_fund
FOREIGN KEY (fund_id) REFERENCES Fund(id)
ON DELETE CASCADE ON UPDATE CASCADE;

