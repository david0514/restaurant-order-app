import React, { useState } from 'react';
import './Reserve.css';
import Notification from './Notification';

interface Reservation {
  id: number;
  name: string;
  contact: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

const sampleReservations: Reservation[] = [];

const Reserve: React.FC = () => {
  const [reservations, setReservations] =
    useState<Reservation[]>(sampleReservations);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newReservation, setNewReservation] = useState<Partial<Reservation>>(
    {}
  );
  const [editReservationId, setEditReservationId] = useState<number | null>(
    null
  );
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewReservation({});
    setEditReservationId(null);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewReservation((prev) => ({ ...prev, guests: parseInt(value) }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      newReservation.name &&
      newReservation.contact &&
      newReservation.date &&
      newReservation.time &&
      newReservation.guests
    ) {
      const reservation: Reservation = {
        id:
          editReservationId !== null
            ? editReservationId
            : reservations.length + 1,
        ...newReservation,
        specialRequests: newReservation.specialRequests || '',
      } as Reservation;

      if (editReservationId !== null) {
        setReservations(
          reservations.map((r) =>
            r.id === editReservationId ? reservation : r
          )
        );
        setEditReservationId(null);
        setNotification({
          message: `${reservation.name} foglalása ${reservation.date} dátumra ${reservation.time} időpontra sikeresen frissítve.`,
          type: 'success',
        });
      } else {
        setReservations([...reservations, reservation]);
        setNotification({
          message: `${reservation.name} foglalása ${reservation.date} dátumra ${reservation.time} időpontra megerősítve.`,
          type: 'success',
        });
      }

      setIsModalVisible(false);
      setNewReservation({});
    } else {
      setNotification({
        message: 'Kérjük, töltsön ki minden kötelező mezőt.',
        type: 'error',
      });
    }
  };

  const handleEdit = (reservation: Reservation) => {
    setEditReservationId(reservation.id);
    setNewReservation(reservation);
    setIsModalVisible(true);
  };

  const handleDelete = (id: number) => {
    setReservations(
      reservations.filter((reservation) => reservation.id !== id)
    );
    setNotification({
      message: 'Foglalás sikeresen törölve.',
      type: 'success',
    });
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div className="reserve-container">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
      <button className="filled-button filled-button-dark" onClick={showModal}>
        Foglalás létrehozása
      </button>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCancel}>
              &times;
            </span>
            <h2>Foglalás részletei</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Név:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newReservation.name || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Email cím:</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={newReservation.contact || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Dátum:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newReservation.date || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Időpont:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={newReservation.time || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Vendégek száma:</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  value={newReservation.guests || ''}
                  onChange={handleGuestsChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="specialRequests">Speciális kérések:</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={newReservation.specialRequests || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="filled-button filled-button-dark"
                >
                  Beküldés
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="reservation-list">
        <h2>Jelenlegi foglalások</h2>
        {reservations.length === 0 ? (
          <p>Még nincs foglalása.</p>
        ) : (
          <ul>
            {reservations.map((reservation) => (
              <li key={reservation.id}>
                <strong>{reservation.name}</strong> - {reservation.date}{' '}
                dátumra, {reservation.time} időpontban <br />
                Vendégek száma: {reservation.guests}, Elérhetőség:{' '}
                {reservation.contact}, Speciális kérések:{' '}
                {reservation.specialRequests}
                <br />
                <button
                  className="edit-button"
                  onClick={() => handleEdit(reservation)}
                >
                  Szerkesztés
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Törlés
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reserve;
