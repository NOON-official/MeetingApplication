import { useEffect, useState } from 'react';

export default function useModalState(teamList) {
  const [modalState, setModalState] = useState(
    teamList?.map((team) => ({ teamId: team.id, open: false })),
  );

  useEffect(() => {
    if (teamList) {
      const initialModalState = teamList.map((team) => ({
        teamId: team.id,
        open: false,
      }));
      setModalState(initialModalState);
    }
  }, [teamList]);

  const openModal = (teamId) => {
    setModalState((prev) =>
      prev.map((state) =>
        state.teamId === teamId ? { ...state, open: true } : state,
      ),
    );
  };

  const closeModal = (teamId) => {
    setModalState((prev) =>
      prev.map((state) =>
        state.teamId === teamId ? { ...state, open: false } : state,
      ),
    );
  };

  return [modalState, openModal, closeModal];
}
