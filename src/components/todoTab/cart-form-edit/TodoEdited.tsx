import { Button, LinearProgress, Typography } from '@mui/material';
import { EditTodo } from '../../../model/types';

const TodoEdited = ({
  item,
  updateLoading,
  handleUpdate,
  idTodo,
}: {
  item: EditTodo;
  updateLoading: boolean;
  handleUpdate: () => void;
  idTodo: string;
}) => {
  return (
    <div
      className={`border border-t-neutral/d2 p-4 rounded ${
        idTodo === 'New' ? 'bg-white' : 'bg-red-rgba'
      }`}
    >
      <div className="grid grid-cols-4 text-base gap-4">
        <div>
          <Typography className="s14-gray">ID</Typography>
          <p
            className={`break-words ${
              idTodo === 'New' ? 'text-t-green' : 'text-t-red'
            }`}
          >
            {idTodo}
          </p>
        </div>
        <div>
          <Typography className="s14-gray">Text</Typography>
          <p>{item.text}</p>
        </div>
        <div>
          <Typography className="s14-gray">Complete</Typography>
          <p className={item.complete ? 'text-t-green' : 'text-t-red'}>
            {item.complete ? 'Completed' : 'Unfinished'}
          </p>
        </div>
        <div>
          <Typography className="s14-gray">Author</Typography>
          <p>{item.author}</p>
        </div>
      </div>
      <div className=" pt-8">
        {updateLoading ? (
          <LinearProgress />
        ) : (
          <Button className="navbar" onClick={handleUpdate}>
            {idTodo === 'New' ? 'Create New Todo ?' : 'Update Todo ?'}
          </Button>
        )}
      </div>
    </div>
  );
};
export default TodoEdited;
