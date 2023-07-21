import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { todoDetailDataSelector } from '../../../store/selects';
import { todoQueryCartSlice } from '../../../store/slice/TodoQueryCartSlice';
import CloseSVG from '../../../assets/SVG/accountsSVG/CloseSVG';

const TodoDetail = () => {
  const item = useSelector(todoDetailDataSelector);
  const dispatch = useDispatch();
  const { setShowDetail } = todoQueryCartSlice.actions;

  return (
    <div className="bg-cart" onClick={() => dispatch(setShowDetail(false))}>
      <div
        className="flex flex-col bg-white rounded px-8 py-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute sm:top-4 sm:right-5 top-2 right-4"
          onClick={() => dispatch(setShowDetail(false))}
        >
          <CloseSVG />
        </div>
        <div className="border-b border-t-neutral/d2 p-8">
          <Typography className="s12-gray">ID</Typography>
          <Typography className="s14">{item._id}</Typography>
        </div>
        <div className="p-8">
          <Typography className="s12-gray">Text</Typography>
          <Typography className="s14">{item.text}</Typography>
        </div>
        <div className="p-8">
          <Typography className="s12-gray">Complete</Typography>
          <Typography className={item.complete ? 's14-green' : 's14-red'}>
            {item.complete ? 'Completed' : 'Unfinished'}
          </Typography>
        </div>
        <div className="border-b border-t-neutral/d2 p-8">
          <Typography className="s12-gray">Author</Typography>
          <Typography className="s14">{item.author}</Typography>
        </div>
        <div className="p-8">
          <Typography className="s14-gray">Create Date</Typography>
          <Typography className="s14">{item.createdDate}</Typography>
        </div>
      </div>
    </div>
  );
};
export default TodoDetail;
