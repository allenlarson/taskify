import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="m-2" type="submit">
      Submit
    </Button>
  );
};
