package handlers

import (
	dto "backendtask/dto/result"
	transdto "backendtask/dto/transaction"
	"backendtask/models"
	"backendtask/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerTrans struct { //membuat struct handler dengan isi sebagai berikut
	TransRepository repositories.TransRepository // field UserRepository berisikan package dari repositories dan memanggil si interface UserRepository dari package repositories
}

func HandlersTrans(TransRepository repositories.TransRepository) *handlerTrans {
	return &handlerTrans{TransRepository}
}

func (h *handlerTrans) CariTrans(c echo.Context) error {
	trans, err := h.TransRepository.CariTrans()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, trans)
}

func (h *handlerTrans) DapatTrans(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	trans, err := h.TransRepository.DapatTrans(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: trans})
}

func (h *handlerTrans) MembuatTrans(c echo.Context) error {
	meminta := new(transdto.CreateTransRequest)
	if err := c.Bind(meminta); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	validation := validator.New()
	err := validation.Struct(meminta)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	trans := models.Transaction{
		StartDate: meminta.StartDate,
		DueDate:   meminta.DueDate,
		UserId:    meminta.UserId,
		Attache:   meminta.Attache,
		Status:    meminta.Status,
	}
	data, err := h.TransRepository.MembuatTrans(trans)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: data})
}

func (h *handlerTrans) UpdateTrans(c echo.Context) error {
	meminta := new(transdto.CreateTransRequest)
	if err := c.Bind(meminta); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	id, _ := strconv.Atoi(c.Param("id"))

	user, err := h.TransRepository.DapatTrans(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	if meminta.StartDate != "" {
		user.StartDate = meminta.StartDate
	}
	if meminta.DueDate != "" {
		user.DueDate = meminta.DueDate
	}
	if meminta.UserId != 0 {
		user.UserId = meminta.UserId
	}
	if meminta.Attache != "" {
		user.Attache = meminta.Attache
	}
	if meminta.Status != "" {
		user.Status = meminta.Status
	}

	data, err := h.TransRepository.UpdateTrans(user, id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: data})
}

func (h *handlerTrans) HapusTrans(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	trans, err := h.TransRepository.DapatTrans(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.TransRepository.HapusTrans(trans, id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: data})
}

func convertResTrans(u models.Transaction) transdto.CreateTransResponse {
	return transdto.CreateTransResponse{
		Id:        u.Id,
		StartDate: u.StartDate,
		DueDate:   u.DueDate,
		UserId:    u.UserId,
		Attache:   u.Attache,
		Status:    u.Status,
	}
}
