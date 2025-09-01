import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, Euro } from 'lucide-react';

interface CurrencySelectorProps {
  value: 'USD' | 'EUR';
  onValueChange: (value: 'USD' | 'EUR') => void;
  className?: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onValueChange, className }) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="USD">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4" />
            <span>USD ($)</span>
          </div>
        </SelectItem>
        <SelectItem value="EUR">
          <div className="flex items-center space-x-2">
            <Euro className="h-4 w-4" />
            <span>EUR (€)</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CurrencySelector;