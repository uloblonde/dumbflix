package models

type Category struct {
	Id   int    `json:"id" gorm:"primary_key:auto_increment"`
	Name string `json:"name" binding:"required,name" gorm:"varchar(255);not ull"`
}
