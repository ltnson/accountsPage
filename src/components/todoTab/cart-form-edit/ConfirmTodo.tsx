import { Button } from '@mui/material';
const ConfirmTodo = ({
  handleAction,
  handleShowConfirm,
  nameAction,
}: {
  handleAction: () => void;
  handleShowConfirm: (bool: boolean) => void;
  nameAction: string;
}) => {
  return (
    <div className="bg-cart" onClick={() => handleShowConfirm(false)}>
      <div
        className="w-96 bg-white p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-t-light">
          {nameAction === 'Delete'
            ? 'You want to delete this Todo ??'
            : 'Your Edited Todo don"t save to Server, remove this Todo and edit new??'}
        </p>
        <div className="flex justify-evenly gap-4 pt-4 pb-2  ">
          <Button
            className="filter-clear"
            onClick={() => handleShowConfirm(false)}
          >
            Cancer
          </Button>
          <Button className="filter-show" onClick={handleAction}>
            {nameAction}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTodo;
