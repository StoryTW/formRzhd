import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import clsx from 'clsx';
import { animateFormError } from '~/utils/helpers/constants';

interface IValidationError {
  error: string;
  className?: string;
}

export const ValidationError: FC<IValidationError> = ({ error, className }) => {
  return (
    <AnimatePresence mode='wait'>
      {error && (
        <motion.div
          variants={animateFormError}
          initial='hide'
          animate='show'
          exit='hide'
          transition={{ duration: 0.15 }}
        >
          <div className={clsx('ml-[20px] pt-2 text-red font-manrope font-medium', className)}>
            {error}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
