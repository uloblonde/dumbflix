package models

type Transaction struct {
	Id        int    `json:"id"`
	StartDate string `json:"startDate" gorm:"type:varchar(255)"`
	DueDate   string `json:"dueDate" gorm:"type:varchar(255)"`
	User      User   `json:"user"`
	UserId    int    `json:"userId"`
	Attache   string `json:"attache" gorm:"type:varchar(255)"`
	Status    string `json:"status" gorm:"type:varchar(255)"`
}
