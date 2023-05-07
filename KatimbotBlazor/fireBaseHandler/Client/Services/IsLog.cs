using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fireBaseHandler.Client.Services
{
    public class IsLog
    {
        private bool _isLog;
        public bool isLog {
            get
            {
                return _isLog;
            }
            set
            {
                _isLog = value;
                NotifyDataChanged();
            }

        }
        public event Action OnChange;

        private void NotifyDataChanged() => OnChange?.Invoke();

    }
}
